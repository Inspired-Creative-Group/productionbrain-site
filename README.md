# theproductionbrain.ai

The Production Brain product page. Static HTML on GitHub Pages, no build step, same
as `icg-website`. Deploys on push to `main`.

**Why its own repo.** GitHub Pages allows one custom domain per repository, and
`icg-website` already uses `inspiredcreativegroupinc.com`. Keeping the product here
also means a redesign cannot break the agency site, and the two stop sharing a
stylesheet they both want to change.

**Canonical home.** `https://theproductionbrain.ai/`.
`inspiredcreativegroupinc.com/production-brain.html` redirects here, so every link
already sent in outreach keeps working. `productionbrain.com` forwards here at the
registrar.

**Copy rules.** The `website-copy-audit` skill governs this page as it governs the
agency site: sacred lines, no em dashes, customer is the hero, and the word count
goes down or stays flat. Product marketing context lives in `icg-website/.claude/`.

**Assets** are copied from `icg-website`, not linked. `style.css`, `partners.css` and
`partners-animations.js` are now forks. A change that should appear in both places has
to be made in both, deliberately.

## Note for Sandy: the free guide page (added 2026-10-20)

**What.** One new page, `giveaway/index.html` (live at `/giveaway`), plus the two guide files it hands out
(the "Stop Being the Switchboard" PDF and the agent edition) and one line in
`sitemap.xml`. Nothing else on the site changed.

**Why.** The Tips, Tricks and Advice Shorts end with "comment SETUP". Shorts links
aren't clickable, so viewers need a short address they can type. The form asks a
few short questions (role, team size, company) and the downloads appear once it is
sent.

**How.** Same Formspree form (`mbdagppd`), honeypot and GA hostname guard as the home
page, plus `generate_lead` (`form_type: setup_guide`) and `setup_form_error` events.
No Turnstile here: Formspree doesn't check it, and on this page it would only gate the
agency auto-reply, which this page doesn't send. It uses `style.css` and `partners.css`
and adds no new fonts or colors; the small layout styles are inline in the page.

**Links to share:** `/giveaway?src=yt`, `?src=ig` and `?src=li` tell us where a lead
came from. To rename the page: move the folder, then update the two lines marked
`<!-- SLUG -->` in the page and the line in `sitemap.xml`. Everything else follows the
folder.
