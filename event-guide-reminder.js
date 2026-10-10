/* Replay the interaction cue when the displayed historical era changes. */
(() => {
  const guide = document.querySelector('#abyss .event-tap-guide');
  const era = document.getElementById('eraReadout');
  if (!guide || !era || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let previous = era.textContent.trim();
  const observer = new MutationObserver(() => {
    const current = era.textContent.trim();
    if (!current || current === previous) return;
    previous = current;
    guide.style.animation = 'none';
    void guide.offsetWidth;
    guide.style.animation = '';
  });
  observer.observe(era, { childList: true, characterData: true, subtree: true });
})();
