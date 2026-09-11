# productionbrain.ai

The Production Brain product page. Static HTML on GitHub Pages, no build step, same
as `icg-website`. Deploys on push to `main`.

**Why its own repo.** GitHub Pages allows one custom domain per repository, and
`icg-website` already uses `inspiredcreativegroupinc.com`. Keeping the product here
also means a redesign cannot break the agency site, and the two stop sharing a
stylesheet they both want to change.

**Canonical home.** `https://productionbrain.ai/`.
`inspiredcreativegroupinc.com/production-brain.html` redirects here, so every link
already sent in outreach keeps working. `productionbrain.com` forwards here at the
registrar.

**Copy rules.** The `website-copy-audit` skill governs this page as it governs the
agency site: sacred lines, no em dashes, customer is the hero, and the word count
goes down or stays flat. Product marketing context lives in `icg-website/.claude/`.

**Assets** are copied from `icg-website`, not linked. `style.css`, `partners.css` and
`partners-animations.js` are now forks. A change that should appear in both places has
to be made in both, deliberately.
