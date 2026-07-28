# One page per competitor, framed as "alternative"

Riders looking to switch search for "zwift alternative", not "endure vs zwift" — nobody searches a brand they don't know yet. We considered splitting each competitor into a neutral comparison page plus a separate switch-focused landing page (`/vs/zwift` and `/zwift-alternative`), which would double the ranking surface. We rejected that: both URLs would target the same query, so they would cannibalise each other and split internal link equity, and the two texts would have to diverge substantially to avoid being duplicates.

So there is exactly one URL per competitor, `/vs/<competitor>`, and it carries the "alternative" framing in its title, H1 and direct answer while keeping the comparison table. If a future reader wonders why `/zwift-alternative` does not exist, this is why.

## Consequences

The URL says `vs` while the page is optimised for "alternative" — that mismatch is deliberate. Slug and keyword intentionally diverge because renaming the route would cost the existing indexing of `/vs/zwift` and `/vs/trainerroad`, and GitHub Pages cannot serve a real 301 redirect.
