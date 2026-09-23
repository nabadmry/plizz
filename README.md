# I'm Sorry ❤️ — Vercel-ready mini app

## 1. Add your photo
Create the folder:

`assets/`

Put your photo inside as:

`assets/us.jpg`

The current design shows a placeholder until you replace it. To use the actual photo, replace the `.photo-placeholder` section in `index.html` with:

```html
<img class="your-photo" src="assets/us.jpg" alt="Us">
```

Then add this CSS:

```css
.your-photo{
  width:min(360px,82vw);
  aspect-ratio:4/5;
  object-fit:cover;
  border-radius:28px;
  box-shadow:0 30px 80px #0008;
}
```

## 2. Add your song
Put your MP3 inside:

`assets/song.mp3`

The player will use it automatically.

For copyright-safe deployment, use a song you have permission to use. If you want a commercial song, you can also leave the audio file out and change the player to a link/embedded player that you are allowed to use.

## 3. Run locally

```bash
python3 -m http.server 5500
```

Open:

`http://localhost:5500`

## 4. Deploy to Vercel

Upload this folder to GitHub, then import the repository into Vercel.

No build command is needed. It is a static HTML/CSS/JS site.

## Personalize
Search these phrases in `index.html` and replace them:
- `My love`
- `Always yours`
- `YOU + ME · ALWAYS`
- The apology letter

The app is intentionally mobile-first so it looks good when opened from a phone.
