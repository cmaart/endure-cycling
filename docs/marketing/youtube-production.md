# YouTube production workflow

How we record and edit ENDURE videos, with Claude Code doing the rough cut and DaVinci Resolve for the fine cut. Agreed on 2026-10-30, nothing tested yet. Update this file once the first video has gone through it.

## Constraints

- Editing is driven by Claude (Claude Code, existing subscription). No extra editing subscriptions (Descript, OpusClip, Tella).
- Manual fine-tuning happens in DaVinci Resolve, which we already use for colour, filters and social formats.
- Everything runs locally on Windows. Installed: ffmpeg 8.0.1, Python 3.13. Missing: `faster-whisper` (`pip install faster-whisper`). No NVIDIA GPU, so Whisper runs on the CPU (a few minutes per 10 minutes of footage).

## Language

First video in German: our current users and paying customers are mostly German-speaking, and a first video reads more natural in the native language. English follows as a separate video, not as a YouTube auto-dub: an auto-dubbed walkthrough would still show the German app UI. With a screen recording plus voice-over, the English version is cheap: record the screen again with the English UI, read the translated script, upload as its own video (both versions rank separately).

## Recording

- OBS with the **Source Record** plugin: camera and screen in one session, saved as separate files on the same timebase. Synced by construction, layout decided in the edit.
- Separate devices (phone camera, iPhone screen recording): clap once at the start with sound on all devices. Claude aligns the audio tracks and cuts the clap.
- Android app on the PC screen: `scrcpy`. iPhone: use the built-in screen recording and the clap.
- Fluffs and retakes are fine, they get cut from the transcript.

## Rough cut (Claude Code)

1. Transcribe with Whisper, timestamp per word.
2. Claude lists what to cut (fluffs, duplicate takes, long pauses, filler words). Review the list before cutting.
3. Layout of camera and screen: side by side (fits a portrait phone app), picture-in-picture (camera in a corner), or switching between them per section.
4. B-roll from own cycling clips: voice keeps running, picture cuts to the clip. Claude samples a still every few seconds per clip to catalogue the scenes (climb, descent, group, trainer, sunset) and maps them to the script; review the picks, stills don't show shake or motion quality. Clip audio muted or ducked, short crossfades, portrait clips cropped or on a blurred background.
5. Animations for what is being said, built with **HyperFrames** (HeyGen, HTML + GSAP rendered locally to MP4, Claude Code skills via `npx skills add heygen-com/hyperframes`, needs Node 22+ and ffmpeg). Claude proposes a list (timestamp, sentence, animation), then renders each approved one as its own clip in ENDURE style (Sora, `#C2552B`, real app labels). Still to check: the licence in the official repo (Apache 2.0 per the official repo, one mirror claims a Remotion-style licence) and whether it can render with a transparent background; otherwise full-screen cards or a keyed background.
6. Export the timeline as **FCPXML** or **OTIO** with all clips, cuts and tracks, animations on their own track.

## Fine cut (DaVinci Resolve)

Import the FCPXML/OTIO, then fine cut, colour, filters, sound. Resolve effects, grades and titles survive an FCPXML round trip only partly, so the order is always rough at Claude, fine in Resolve.

For follow-up work (subtitles, shorts, English version) export the timeline from Resolve again as FCPXML/OTIO; Claude reads the current state from it.

Direct control of Resolve: the official Python scripting API is Studio only. For the free version there are community MCP servers that run as a script inside Resolve (e.g. `davinci-resolve-lite-mcp`), not vetted. File exchange is the default.

Alternative considered: Kdenlive, whose `.kdenlive` project file is plain XML that Claude can edit directly (a real shared timeline, taking turns, never with the project open). Not chosen because Resolve is already in use and stronger.

## After the edit

- Subtitles as `.srt` from the transcript (German and English), uploaded to YouTube.
- Shorts: Claude picks the strongest 30 to 60 seconds and crops them to 9:16.

## Rights and copy

- Clips with music in the background audio only go in muted: YouTube Content ID can block the video or hand its ad revenue to the rights holder.
- Recognisable riders in B-roll: get their consent, the video advertises ENDURE.
- Animations must not show what the app doesn't do (e.g. a plan that adjusts itself). Wording follows the site and `CONTEXT.md`.

## Sources

- HyperFrames: https://github.com/heygen-com/hyperframes
- Inspiration: "I Fully Automated My Video Editing Using Claude Code" (WeAreNoCode), https://youtu.be/HzXD4GVqXwM — uses Tella.tv, Claude and HyperFrames, and inserts animations that illustrate what is being said.
- Resolve free MCP: https://pypi.org/project/davinci-resolve-lite-mcp/
