# Conflict-chain audit — updated 12 October 2026

## Translation coverage after remediation
All **55 defined chains** now contain dedicated Hebrew and Arabic causal-step translations, including the 1948 special translation. The 203 source steps are covered: Jewish 31 chains/116 steps; Christian 12 chains/44 steps; Islamic 12 chains/43 steps.

The Hebrew and Arabic step arrays have been checked against each chain's English step count and show **no count mismatches**. The three timeline renderers now select these dedicated step translations, while keeping original English event-title matching for navigation. All 55 chains retain English descriptions and localized Hebrew/Arabic introductory text (some use generic cautionary notes).

## Source changes
- `app.js`: 30 regular translated chains plus a dedicated 1948 translation, including repaired October 7 step alignment.
- `christianity.js`: added 12 dedicated Hebrew/Arabic step arrays and enabled their rendering.
- `islam.js`: added 12 dedicated Hebrew/Arabic step arrays and enabled their rendering.
- Corrected generic event-story substitution in Christian/Islamic renderers before supplying dedicated translations.

## Remaining validation limitations
1. **Not a full independent historical fact-check**: not every date, casualty figure, causal characterization, and linked citation across 203 steps has been independently checked against primary or scholarly sources. Historical translations were reviewed for meaning and chronology but should not be certified as error-free.
2. **Live-browser testing pending**: cannot confirm that all 55 popups open, that every button navigates correctly, or that all three language modes render without layout problems on desktop/mobile.
3. **16 contextual milestones have no dedicated timeline event to open** (15 Jewish, 1 Christian). These are deliberately displayed as non-clickable informational context, not dead buttons. Adding clickable entries requires adding and sourcing the missing timeline events.
4. Some Jewish chain introductions display a localized general caution rather than a chain-specific translated introduction. The individual step descriptions are translated.
5. External source links and site deployment still need live verification.

## Static audit conclusion
**55/55 chain step-translation coverage confirmed in source.** Step-count alignment checks passed. **End-to-end historical and browser QA is not yet complete**, so do not claim that all errors and issues are eliminated.
