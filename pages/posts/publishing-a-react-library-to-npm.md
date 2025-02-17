# Publishing a React library to npm


## Testing npm

### See what's gonna be published:
```sh
npm pack
```

### Test locally

Suppose your directory is like this:
```
my-lib/
my-lib-user/
```

You can go to `my-lib-user/` and install `my-lib/`
```sh
cd my-lib-user/
npm install ../my-lib/
```

Somewhere in `my-lib-user/`:
```js
import AudioQuote from '@kaitos/audioquote'
```

Reinstalling after updating:
```sh
npm uninstall @kaitos/audioquote; npm install ../my-lib/
```

### Unpublishing

TLDR: 

- "For newly created packages, as long as no other packages in the npm Public Registry depend on your package, you can unpublish anytime within the first 72 hours after publishing."
- You cannot republish the same version.

See:

- [Unpublishing packages from the registry | npm Docs](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

- [npm Unpublish Policy | npm Docs](https://docs.npmjs.com/policies/unpublish)


### See also

[developers | npm Docs](https://docs.npmjs.com/cli/v10/using-npm/developers)


## Articles / Guides

- [ ] REREAD: How to package your React Component for distribution via NPM | by Suprada Urval | ITNEXT
https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

- [ ] REREAD: Building a Component Library with React, Typescript, and Storybook: A Comprehensive Guide | by Ashish Kachhadiya | Simform Engineering | Sep, 2023 | Medium
https://medium.com/simform-engineering/building-a-component-library-with-react-typescript-and-storybook-a-comprehensive-guide-ba189accdaf5


## Related

Related and interesting stuff:

- https://github.com/dequelabs/cauldron
    * Deque's component library
    * KAITO: Inspiration.

- [ ] https://github.com/panhavsilva/boilerplate-lib-vite-react

- [ ] RECHECK: https://nodejs.org/api/packages.html#exports
    * KAITO: Should I not be able to import `@kaitos/audioquote` from its own test and demo files?
      Doesn't seem to work with Vite. Might be misconfiguring it.

---

END.
