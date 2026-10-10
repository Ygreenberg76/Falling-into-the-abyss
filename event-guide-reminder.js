/* Gentle, scroll-driven reminder shared by all three timelines. */
(() => {
  const abyss = document.getElementById('abyss');
  const guide = abyss?.querySelector('.event-tap-guide');
  if (!abyss || !guide || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let distance = 0;
  let lastReminder = 0;
  const threshold = 1100;
  const cooldown = 8500;
  function remind() {
    guide.style.animation = 'none';
    void guide.offsetWidth;
    guide.style.animation = '';
  }
  abyss.addEventListener('wheel', (event) => {
    if (event.defaultPrevented || Math.abs(event.deltaY) < 1 || event.deltaY < 0) return;
    distance += Math.min(Math.abs(event.deltaY), 180);
    if (distance >= threshold) {
      distance = 0;
      const now = Date.now();
      if (now - lastReminder >= cooldown) {
        lastReminder = now;
        remind();
      }
    }
  }, { passive: true });
  // Touch users get the same reminder after several downward swipes.
  let touchY = null;
  abyss.addEventListener('touchstart', (event) => { touchY = event.touches[0]?.clientY ?? null; }, { passive: true });
  abyss.addEventListener('touchmove', (event) => {
    if (touchY === null) return;
    const y = event.touches[0]?.clientY;
    if (y === undefined) return;
    const delta = touchY - y;
    touchY = y;
    if (delta <= 0) return;
    distance += Math.min(delta, 100);
    if (distance >= threshold) {
      distance = 0;
      const now = Date.now();
      if (now - lastReminder >= cooldown) {
        lastReminder = now;
        remind();
      }
    }
  }, { passive: true });
})();
