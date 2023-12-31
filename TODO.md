# TODO

- [ ] FIXME: `<img src="./whatever.jpg">` is not loaded. You need to use Markdown.
See `posts/zero/index.md`

- [ ] Automatically set the title from the markdown file.

- [ ] Permalinks that differ from the file system structure.
Something similar to Jekyll's `permalink`.

- [ ] CHECK: https://github.com/willemliu/static-next

- [ ] Add comments, esp for drafts
    * `nextra-theme-blog` has peer dependency on `react-cusdis`.

- [ ] Change Prettier config. Use something similara to Airbnb JavaScript Style Guide.

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


## DONE

- [x] FIX: I don't like that the footer is part of the `<article>` and is added using a `small` tag.
