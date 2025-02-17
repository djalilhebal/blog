# TODO

- [ ] FIXME: `<img src="./whatever.jpg">` is not loaded. You need to use Markdown.
See `posts/zero/index.md`

- [ ] Automatically set the title from the markdown file.

- [ ] Permalinks that differ from the file system structure.
Something similar to Jekyll's `permalink`.

- [ ] Change Prettier config. Use something similara to Airbnb JavaScript Style Guide.

- [ ] Nextra only dark mode.

- [ ] Replace `scripts/gen-rss.js`
    * Currently it is skipping pages that are inside parent folders.
    For example: `posts/whatever/index.md` instead of using `whatever` as the page name.
    * It relies on frontmatter data. Its absence crashes the script, causing the build to fail.
    We want it to use frontmatter if it exists, otherwise use markdown content (H1 for example) or skip the file (and showing a warning).


## NOTES TO SELF

- RSS kept failing for no apparent reason, so I removed it for now.
```diff
-    "build": "node ./scripts/gen-rss.js && next build",
+    "build": "next build",
```

- Remember: Nextra supports footnotes a la GitHub:
```md
### Footnotes

- Footnote [^1].
- Footnote [^2].

[^1]: Footnote **can have markup**

    and multiple paragraphs.

[^2]: Footnote text.
```

- Nextra depends on https://www.npmjs.com/package/@napi-rs/simple-git
which has a method to `getFileLatestModifiedDate`.


## DONE

- [x] FIX: I don't like that the footer is part of the `<article>` and is added using a `small` tag.

- [x] Add analytics (Vercel Analytics).

- [x] Add comments, esp for drafts
    * `nextra-theme-blog` has peer dependency on `react-cusdis`.
