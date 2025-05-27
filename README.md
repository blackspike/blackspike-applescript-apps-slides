# make your own macOS apps

NOTE: you might need to Allow Audio and Video in the Autoplay settings in your browser's address bar!

NOTE: FireFox has a bug where it won't trigger video autoplay with page transitions, use Chrome unfortunately :(

## To make this slide app your own

- Update the settings in `src/meta/settings.json`
- Create the slide mdx in `src/content/slides/`
- Create videos in `public/videos`
- Create images in `src/assets/images/`
- Add voice overs to `public/voice-over`
- Replace the logo svg in `src/assets/images/logo.svg`

## View in your browser

https://blackspike-mac-apps.netlify.app

## Script for elevenlabs.io voice overs

At blackspike design we often create single-use mac apps for automating repetitive tasks, like this app, to generate web-ready videos.

AI is excellent at AppleScript, so prompt it for f f m-peg commands to optimise and convert dragged mp4's to web-m, and extract the first frame as an avif poster image.

Paste the code into your Mac's built-in Script Editor app in your Utilities folder, and save it with the file format set to Application.

Now drag any mp4 file onto the app for a collection of web-ready videos. As a bonus, we copy an html video tag snippet to your clipboard, ready to paste into a web page.

Finally, we use a custom icon we drew in Inkscape – a different colour for each app. Download ours from the video description.

## YouTube description

We use #AI to write single-use #AppleScript mac applications to save time on routine web development tasks.

For example: a drag-and-drop #macOS App to optimise and encode web ready videos.

For more detail, code snippets and downloads, read the blog post at
👉 https://www.blackspike.com/blog/creating-mac-app-webdev-tools-with-ai-and-applescript/

Download the icon
👉 https://www.blackspike.com/dropbox/icon.icns

Download the example app
👉 https://www.blackspike.com/dropbox/ffmpeg.app.zip

00:03 What we're making – a single use app to make web-ready videos

00:11 Using AI to generate AppleScript – the prompt we used

00:24 Creating a macOS Application with the built-in Script Editor app

00:35 Using the app – demo

01:02 Adding a custom app icon

👉 https://www.blackspike.com

```sh
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
