# theproductionbrain.ai

**This repo is the Production Brain page. Juan's instruction, 2026-09-11: all work on
that page happens here, not in `icg-website`.**

Live at <https://theproductionbrain.ai>. Static HTML on GitHub Pages, deploys on push
to `main`, usually inside 30 seconds.

## Before you touch the copy

Load the **`website-copy-audit`** skill. It governs this page exactly as it governs the
agency site: sacred lines, no em dashes, no AI tells, customer is the hero, and the word
count goes down or stays flat. Product marketing context, the ICP and the things that are
**not true yet and must never be claimed**, are in `.claude/product-marketing.md`.

## The domain

Juan owns **theproductionbrain.ai** and **theproductionbrain.com**. He does **not** own
`productionbrain.ai`; that belongs to someone else and forwards to postmachina.ai. Do not
write the short form anywhere, and do not "correct" the name by removing the "the".

`inspiredcreativegroupinc.com/production-brain.html` is a redirect to here. Every outreach
message sent since 2026-09-10 carries that old URL, so it must keep working.

## What is deliberate

- **Static HTML, no build step, no framework.** Considered and declined 2026-09-11: a build
  system buys nothing here and puts something breakable between a push and the live page.
- **`style.css`, `partners.css` and `partners-animations.js` are FORKS** of the agency
  site's files, not shared. A change meant for both places has to be made in both, on
  purpose. This is the cost of the split and it was accepted knowingly.
- **Content is visible by default.** GSAP reveals are progressive enhancement layered on
  top. Never park something at `opacity: 0` waiting on a scroll trigger it might not get.

## Verifying a change

Check the rendered page in a clean browser, **not** Claude-in-Chrome. That environment
suppresses this page's scroll-reveal animations, which on 2026-09-11 produced a false
report that the live hero was invisible. Playwright is fine. Scroll the whole page slowly;
a fast scroll leaves elements un-revealed and reads as a bug that is not there.

## Open next

The hero background: a generated image of a Mac Studio in a working studio, replacing the
gradient. Agreed 2026-09-11, not started. Harder than it sounds, a Mac Studio is a small
silver box and it has to be the subject of a photograph containing people.
