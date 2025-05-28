# Make custom macOS apps: creating our own web development tools

## Recording

Set your screen recording view to 960px x 540px (we use [cleanshot.com](https://cleanshot.com))

NOTE: you might need to Allow Audio and Video in the Autoplay settings in your browser's address bar

NOTE: FireFox has a bug where it won't trigger video autoplay with page transitions, use Chrome unfortunately :(

## To make this slide app your own

- Update the settings in `src/meta/settings.json`
- Create the slide mdx in `src/content/slides/`
- Create videos in `public/videos`
- Create images in `public/images/`
- Generate voice overs with your [elevenlabs](https://elevenlabs.io/) api key and save them to `public/voice-over`
- Replace the logo svg in `src/assets/images/logo.svg`

## View in your browser

https://blackspike-mac-apps.netlify.app

## YouTube description

### [Watch this on YouTube](https://youtu.be/kMqj5F2YwVQ)

We use #AI to write single-use #AppleScript macOS applications to automate routine web development tasks. In this example: a drag-and-drop app to encode website-ready video to optimised mp4, webm, and avif.

For more detail, code snippets and downloads, read the blog post at
👉 https://www.blackspike.com/blog/creating-mac-app-webdev-tools-with-ai-and-applescript/

Download the icon
👉 https://www.blackspike.com/dropbox/icon.icns

Download the example app
👉 https://www.blackspike.com/dropbox/ffmpeg.app.zip

00:01 What we're making – a single use app to make web-ready videos

00:08 Using AI to generate AppleScript – the prompt we used

00:20 Creating a macOS Application with the built-in Script Editor app

00:31 Using the app – demo

00:13 Adding a custom app icon

👉 https://www.blackspike.com

## Script

At blackspike design we often create single-use mac apps for automating repetitive tasks, like this app, to generate web-ready videos.

AI is excellent at AppleScript, so prompt it for ffmpeg commands to optimise and convert dragged mp4's to webm, and extract the first frame as an avif poster image.

Paste the code into your Mac's built-in Script Editor app in your Utilities folder, and save it with the file format set to Application.

Now drag any mp4 file onto the app for a collection of web-ready videos. As a bonus, we copy an html video tag snippet to your clipboard, ready to paste into a web page.

Finally, we use a custom icon we drew in Inkscape – a different colour for each app. Download ours from the video description.

Don't forget to like and subscribe for more videos like this. Check out our blog at blackspike.com. Thanks for watching!

## Social posts

Behold! A second video in our pivot to video experiment. This one is about how we use AI to write single-use AppleScript macOS applications to encode web-ready video to optimised mp4, webm, and avif.

https://youtu.be/kMqj5F2YwVQ

#webdev #macos #applescript #ffmpeg #webm #avif #ai  #grind #pivotingWildly

Or, like a normal person who prefers to read, rather than watch, read the blog post at

https://www.blackspike.com/blog/creating-mac-app-webdev-tools-with-ai-and-applescript/

#webdev #macos #applescript #ffmpeg #webm #avif #ai #automation #grind #pivotingWildly




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
