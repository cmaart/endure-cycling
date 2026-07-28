# One English slug serves both languages

Every route uses the same English slug under `/` and `/de` (`/guides/ftp-test-power-zones` and `/de/guides/ftp-test-power-zones`), even though a German slug would carry the German keyword in the URL. We picked consistency: keyword-in-URL is a weak ranking signal compared to title, H1 and body text, all of which are fully translated, whereas per-language slugs would require a slug map, make hreflang pairing non-trivial, and turn the two existing guides into exceptions — or force them to move and lose their indexing.

Deployment is GitHub Pages, so there is no server-side 301 available to soften a URL change later; that raised the cost of getting slugs wrong and pushed us further toward the simpler scheme.
