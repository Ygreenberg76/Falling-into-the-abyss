# Conflict-chain audit — 12 October 2026

## Scope and status
Static source-code inspection of `app.js`, `christianity.js`, and `islam.js` on the default branch. This is **not** a completed browser-interaction test or an independent line-by-line historical fact-check of all 203 steps.

| Timeline | Chains | Chain steps | Dedicated Hebrew/Arabic step translations |
| --- | ---: | ---: | ---: |
| Jewish | 31 | 116 | 31/31 (30 in `VERIFIED_CHAIN_STEP_TRANSLATIONS`, 1948 in a separate map) |
| Christian | 12 | 44 | 0/12 |
| Islamic | 12 | 43 | 0/12 |
| **Total** | **55** | **203** | **31/55** |

## Corrections committed during this audit
- Completed missing Hebrew and Arabic step translations for the October 7 attack, the Dolphinarium bombing and the Sbarro bombing in `app.js`.
- Corrected an eight-step alignment error in the October 7 translation array: the final step (Israeli military response) had been omitted.
- Added missing translated historical chain introductions for the Christian ISIS and Gaza community chains and the Islamic October 7/Gaza chain.
- Removed a misleading fallback in Christian and Islamic chains that had displayed an event's translated story/context as if it were a dedicated translation of the causal step. It now shows an explicitly generic, translated navigation instruction. **This is a safety/correctness fix, not completion of dedicated step translations.**

## Findings requiring follow-up
1. **24 chains still lack dedicated per-step Hebrew and Arabic explanations:** all 12 Christian chains and all 12 Islamic chains. Their introductory notes have Hebrew/Arabic coverage, and their step titles/roles can be localized, but the step body is now a generic translated instruction rather than an individually translated causal explanation.
2. **16 contextual milestones lack separate linked timeline events:** 15 Jewish steps and one Christian step. These are rendered as non-clickable `context-only` elements, not dead hyperlinks. The Christian example is `Ottoman Empire enters World War I`. Jewish examples include the 1948 Arab–Israeli War, Suez Crisis, the closure of the Straits of Tiran, and other explanatory milestones in earlier war chains. If all milestones must open popups, corresponding timeline entries must be added and sourced.
3. **21 Jewish chains use a localized general caution for the chain introduction** rather than a separately reviewed Hebrew/Arabic introductory note (1948 has a dedicated note). Their per-step Hebrew/Arabic translations are present.
4. **The event data, external citations, English wording, dates and casualty figures require individual source comparison.** The code review alone cannot certify 203 historical statements as error-free.
5. **Runtime/browser checks remain pending:** open each of the 55 chains in English, Hebrew and Arabic, verify all buttons open the intended events, check RTL layout and mobile behavior, and verify external source URLs.

## Structural checks
- 55 chain definitions found: 31 Jewish, 12 Christian, 12 Islamic.
- 203 steps found: 116 Jewish, 44 Christian, 43 Islamic.
- All 55 chain headings have English notes and Hebrew/Arabic note rendering (either a dedicated translated note or an explicitly generic localized caution).
- All 31 Jewish chains have dedicated Hebrew and Arabic step arrays; the October 7 chain now has all eight entries.
- Existing linked steps are matched by exact original English event titles, not translated display text, preserving language-independent lookup.
- Nonexistent step targets are intentionally rendered as `context-only`; they should not be described as clickable links.

## Historical-source spot check
For the 2025 ceasefire and 2026 aftermath, compare to:
- UN OCHA, first month of the October 2025 ceasefire: https://www.ochaopt.org/content/report-humanitarian-response-un-and-humanitarian-partners-during-first-month-october-2025-ceasefire
- UN OCHA, humanitarian report 2 October 2026: https://www.ochaopt.org/content/humanitarian-situation-report-2-october-2026
- UN Human Rights, 12 October 2026: https://palestine.un.org/en/324294-one-year-after-ceasefire-announcement-killings-continue-across-gaza

**Conclusion:** The complete 55-chain audit cannot yet be marked passed. The Jewish chain step-translation gap has been closed; the Christian and Islamic dedicated step translations and browser-level verification are outstanding.
