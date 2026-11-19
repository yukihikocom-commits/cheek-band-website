# Cheek Middle School Band

A static site for the Cheek Middle School Band (Denton ISD, Aubrey / Prosper, Texas). It is a band information site for families. School and Chargers logos belong to Denton ISD and Cheek Middle School.

Pages: Home, About, Ensembles, Beginning Band, Calendar, Families, Achievements, Gallery, Private Lessons, Practice, Support, and Contact.

Facts on the site come from the program’s Google Site, the Cheek and Denton ISD websites, the October 2, 2026 district announcement, and the 2026 Music for All National Festival program. Anything the directors still need to supply is marked **Coming soon**.

## Edit the content

Almost everything a director or parent volunteer will change is in one file:

`src/data/site.json`

Open that file in any text editor. Keep the quotes and commas. Then rebuild.

| To change | Where in `site.json` |
| --- | --- |
| Director name, email, phone, or biography | `directors` |
| A concert or event | `events` (use `"status": "upcoming"` or `"past"`) |
| Daily schedule | `schedule` |
| Handbook, supply list, or a form | `documents` (put the file in `public/files/`, then set `href` to `/files/your-file.pdf` and `"placeholder": false`) |
| Lesson fee or teacher list | `lessons` and `lessonStaff` |
| A photo | `gallery` or a director’s `photo` |
| A link in the footer | `links` |
| The checklist of unfinished items | `todos` |

Do not add personal email addresses for private-lesson teachers, and do not add headshots of lesson teachers. Lesson questions stay with the directors.

### Add a photo

1. Export a JPG or WebP that is about 1600 pixels wide and under 300KB.
2. Save it in `public/images/`.
3. In `gallery`, set `src` to `/images/your-file.webp`, write an `alt` description, set `caption`, and set `"placeholder": false`.

The Honors Band photo and director portraits already on the site are the ones published in the 2026 Music for All program. The Cheek logo is the district mark.

### Add an event

```json
{
  "date": "2027-05-12",
  "time": "7:00 p.m.",
  "title": "Spring concert",
  "place": "Cheek Middle School",
  "detail": "Honors, Symphonic, and Concert Bands.",
  "status": "upcoming"
}
```

## Run it locally

You need Node.js 22.

```bash
npm install
npm run dev
```

The dev server prints a local address. Stop it with Ctrl+C.

Build the site:

```bash
npm run build
```

The finished site is the `dist/` folder. Preview that folder with:

```bash
npm run preview
```

## Deploy on Netlify

`netlify.toml` already sets the build command to `npm run build` and the publish directory to `dist`. Node 22 is set in that file.

**Connect the Git repository**

1. In Netlify, choose **Add new site** → **Import an existing project**.
2. Select this repository.
3. Netlify reads `netlify.toml`. You should not need to type a build command.
4. Deploy. After the first deploy, open **Forms** and set the contact-form notification address to a director.

**Or drag and drop**

1. On your computer, run `npm run build`.
2. In Netlify, choose **Add new site** → **Deploy manually**.
3. Drag the `dist` folder onto the page.

Drag-and-drop deploys do not rebuild when you edit `site.json`. Connect the repository if directors will edit content in Git.

## Contact form

The contact page includes a Netlify form named `contact`. It works after the site is deployed on Netlify. On a local preview, use the director email addresses instead.
