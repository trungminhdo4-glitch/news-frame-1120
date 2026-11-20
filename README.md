# news-frame-1120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/trungminhdo4-glitch/news-frame-1120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/trungminhdo4-glitch/news-frame-1120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One front-page style image that sums up the world news of Friday 20 November 2026: a lead story with a drawn map plus six story cards with code-drawn icons. Every graphic is drawn in HTML/SVG in [`design/frame.html`](design/frame.html), rendered once to `entry.png` with headless Edge (`node design/render.mjs`); `main.ts` checks the PNG against the gate limits and writes the same bytes to `/output/entry.png` on every run. No photos, no logos. Sources are named in the image footer.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
