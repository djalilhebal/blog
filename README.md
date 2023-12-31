# Djalil's public ramblings

https://blog.djalil.me


## Original intro

It allows you to write Markdown and focus on the _content_ of your portfolio. This starter includes:

- Automatically configured to handle Markdown/MDX
- Generates an RSS feed based on your posts
- A beautiful theme included out of the box
- Easily categorize posts with tags
- Fast, optimized web font loading

### Configuration

1. Update your name in `theme.config.js` or change the footer.
2. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
3. Update the meta tags in `pages/_document.js`.
4. Update the posts inside `pages/posts/*.md` with your own content.


## Getting started

```sh
git clone https://github.com/djalilhebal/blog
npm install
npm run dev
```


## Notes to self

TDLR: Decided to use Nextra and start by cloning the `nextjs-portfolio-starter` template from Vercel.

TLDR: Since I'm starting to like Vercel, I decided to use their framework (Next.js) and one of their templates (which is based on Nextra).

- https://github.com/vercel/nextjs-portfolio-starter
    * https://vercel.com/templates/next.js/portfolio-starter-kit
    * Uses "Next.js and a library called Nextra".

Decided not to use
```sh
npx create-next-app --example blog my-blog
```
because it uses old package versions.

### Requirements

- Markdown
    * Maybe MDX as well

- Custom components (like `AudioQuote`)

- Pref uses tech I am familiar with (JavaScript or TypeScript, React or Vue, etc.).


### Options

- Next.js plus MDX, or Nextra (React)

- Nuxt (Vue)

### Details about Nextra

Decided to clone the repo directly instead of using `create-next-app`.
`create-next-app` seems to use an old version of Nextra.

```sh
git clone https://github.com/vercel/nextjs-portfolio-starter blog1
cd blog1
npm install
npm run dev
```

Instead of something like this:
```sh
npx create-next-app --example blog blog2
cd blog2
npm run dev
```

<details>
<summary>Comparing dependencies</summary>

`blog1/package.json`:
```json
{
  // ...
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^13.5.6",
    "nextra": "^2.13.2",
    "nextra-theme-blog": "^2.13.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "rss": "^1.2.2"
  },
  // No "devDependencies"
  // ...
}
```

`blog2/package.json`:
```json
{
  // ...
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "latest",
    "nextra": "^2.0.0-beta.5",
    "nextra-theme-blog": "^2.0.0-beta.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "rss": "^1.2.2"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "typescript": "^4.7.4"
  }
  // ...
}
```

</details>


## Credits

- Started as a clone of the [`nextjs-portfolio-starter` template](https://github.com/vercel/nextjs-portfolio-starter).
- Built with **Next.js** and a library called [Nextra](https://nextra.vercel.app/)/
- Deployed on [Vercel](https://vercel.com/).

### Resources used

- The paint splatter image (`paint-splatter-2.png`) was downloaded from https://www.onlygfx.com/18-paint-splatters-png-transparent/

- [Hexagon icon | SVG Silh](https://svgsilh.com/image/3202629.html)
