/* Replay the interaction cue when the displayed historical era changes. */
(() => {
  const guide = document.querySelector('#abyss .event-tap-guide');
  const era = document.getElementById('eraReadout');
  const range = document.getElementById('eraRange');
  if (!guide || !era || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let previous = [era.textContent.trim(), range?.textContent.trim()].join('|');
  const observer = new MutationObserver(() => {
    const current = [era.textContent.trim(), range?.textContent.trim()].join('|');
    if (!current || current === previous) return;
    previous = current;
    guide.style.animation = 'none';
    void guide.offsetWidth;
    guide.style.animation = '';
  });
  observer.observe(era, { childList: true, characterData: true, subtree: true });
  if (range) observer.observe(range, { childList: true, characterData: true, subtree: true });
})();
