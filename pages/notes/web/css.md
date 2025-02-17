# CSS

TLDR: BEM and Nicolas' idiomatic CSS are cool.


## Learning

- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)
  * [Official CSS Nesting – the last piece of the puzzle – Ben Frain](https://benfrain.com/official-css-nesting-the-last-piece-of-the-puzzle/)
    * 2021-03-17
    * @SaraSoueidan tweeted it https://twitter.com/SaraSoueidan/status/1384143921500983299

### Coding Games

- ***Flexbox Froggy*** `[game][coding]["about CSS Flexbox"]`
  * suggested by Jen Kramer (@jen4web)
  * https://github.com/thomaspark/flexboxfroggy/
  * http://flexboxfroggy.com
  * Kaito played: 2020-10-06

- ***Grid Garden*** `[game][coding]["about CSS Grid"]`
  * https://github.com/thomaspark/gridgarden
  * https://cssgridgarden.com
  * Kaito played: 2020-10-06


### Random

- [Quick CSS Trick: How To Center an Object Exactly In The Center | CSS-Tricks](https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/)
```css
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
```

- [ ] [Centering in CSS: A Complete Guide | CSS-Tricks](https://css-tricks.com/centering-css-complete-guide/)

- [ ] [Practical CSS Scroll Snapping | CSS-Tricks](https://css-tricks.com/practical-css-scroll-snapping/)

- [x] [CSS Anchor Is The Best New CSS Feature Since Flexbox | YouTube](https://www.youtube.com/watch?v=B4Y9Ed4lLAI)
    * Relies on `popoever` and `anchor` attributes

- [x] READ: https://piccalil.li/quick-tip/create-a-line-break-while-maintaining-inline-status/

- [ ] RECHECK: [Styling buttons, the right way](https://fvsch.com/styling-buttons)
- [ ] CHECK: [Transparent iframes and dark mode](https://fvsch.com/transparent-iframes)

- [ ] Beautiful CSS box-shadow examples - CSS Scan https://getcssscan.com/css-box-shadow-examples

- [ ] https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/

- [ ] https://developers.google.com/web/updates/2019/02/constructable-stylesheets

- [ ] https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web/


## Methodologies

CSS architectures and methodologies.

TLDR: BEM is cool. Try to follow it.

- [x] SMACSS
  * [Scalable Modular Architecture for CSS (SMACSS) by Jonathan Snook | FrontendMasters.com](https://frontendmasters.com/courses/smacss/)

### BEM

I like it.

- **BEM**
  * BEM website: https://en.bem.info
  * [x] [Battling BEM CSS: 10 Common Problems And How To Avoid Them by David Berner](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
  * [x] [BEMIT: Taking the BEM Naming Convention a Step Further by Harry Roberts](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
    -  responsive suffixes

- [ ] BEM vs SMACSS?


### RSCSS

- [RSCSS](https://github.com/rstacruz/rscss)
    * "Reasonable System for CSS Stylesheet Structure."
    * "RSCSS pretty much follows BEM conventions, only with a different syntax."
      -- https://rstacruz.github.io/rscss/other-resources.html
    * 2023-11-18 Checked.
    * Uses [`docpress`](https://github.com/docpress/docpress) to generate the website. Looks neat.
    * As far as I know, BEM does not require (or recommend) using 2 word names for blocks.
      They used `menu` as a block name in their examples.

### Atomic CSS

AKA utility-first CSS

- [In Defense of Utility-First CSS by Sarah Dayan (@frontstuff_io)](https://frontstuff.io/in-defense-of-utility-first-css) #archived #tweeted

- [x] READ: [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)


## Ordering CSS properties

TLDR: Probably just adopt Idiomatic CSS

- [x]  [Poll Results: How do you order your CSS properties? | CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/) - 2012

- "Idiomatic CSS" by Nicolas Gallagher (creator of Normalize.css) \
https://github.com/necolas/idiomatic-css

- "Concentric CSS" by Brandon Rhodes - 2011, updated 2019 \
https://rhodesmill.org/brandon/2011/concentric-css/  
https://github.com/brandon-rhodes/Concentric-CSS

- “Outside In ordering” by Guy Routledge - 2014 \
https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685


## Documenting and Commenting CSS

- [The Options for Programmatically Documenting CSS | CSS-Tricks - CSS-Tricks](https://css-tricks.com/options-programmatically-documenting-css/) 

- KSS http://warpspire.com/kss/syntax/
    * Archived: https://web.archive.org/web/20220630204105/https://warpspire.com/kss/syntax/
    * KAITO: KSS looks especially cool

- [ ] DocBlock-esque https://github.com/chris-pearce/css-guidelines#docblock-esque
For example:
```css
/**
 * A component for the most common type of search input which has deep rounded
 * corners, shadows, and a background image of a magnifying glass icon
 * positioned to the left or right side. Visit: /subscribers/ to see an
 * example.
 *
 * @markup
   <form action="" class="c-search-input [modifier]">
       <label for="[id.value]" class="c-search-input__label  u-hide-visually">Label text</label>
       <input type="search" id="[value]" class="c-search-input__input">
       <span class="c-search-input__icon"></span>
  </form>
 */
```


## Tailwind CSS

- [v0.dev](https://v0.dev) (by Vercel) generates Tailwind code.

- https://tailwindflex.com/

---

END.
