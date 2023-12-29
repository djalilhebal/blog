# NOTES: Web Accessibility

- By Google and Udacity
- Started: 2023-12-XX.
- Completed: 2023-12-20.
- Opinion: Fine.
- Link: [Web Accessibility | Udacity](https://www.udacity.com/course/web-accessibility--ud891)
- Repo: [Udacity Web Accessibility | GitHub](https://github.com/udacity/ud891)
    * "Google and Udacity course on Accessibility."
    * Cloned.


## Notes

There are 6 lessons, each taking about an hour.

1. Accessibility Overview
    - mentioned Repetitive Strain Injury
    - Install Chromevox/Screen Reader ext https://chromewebstore.google.com/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn
    - ChromeVox Lite to teach empathy, nice.
    - POUR: Perceivable, Operable, Understandable, Robust.
    https://webaim.org/standards/wcag/checklist
    https://webaim.org/articles/pour/

2. Focus
    - Managing Focus: Add `tabindex="-1"` to headers then `.focus()` them after changing the content dynamically.
    - [ ] REREAD: About skip links https://webaim.org/techniques/skipnav/
    - Skip links automatically move focus to the target element.
    - "The ARIA Authoring Practices doc (or "ARIA Design Patterns doc") is a great resource for figuring out what kind of keyboard support your complex components should implement."
    https://www.w3.org/TR/wai-aria-practices/
    - Roving focus technique: `tabindex=0` for the focused element but `tabindex=-1` for the rest radio options, for example. We change them as we change the selected option.
    - [ ] `dialog` HTML element https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

3. Semantics Basics
    - **Affordances**. Like the example of using a kettle, a coffee mug, etc. because they all have the same shape.
    The handle is a visual cue.
    Classical examples of affordances are buttons and sliders.
    - **The Accessibility Tree**. It's like the DOM tree but we remove all the nodes we don't need and keep only the info we care about (role, name, value, state).

4. Navigating content
    - `CMD + L` to jump to address bar.
    - [ ] [WebAIM: Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
    
5. ARIA
    - `aria-owns`
    - `aria-activedescendent` https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant
    - For windowing (rendering) and lazy loading: `aria-posinset` and `aria-setsize`.
    - `aria-hidden` with no value doesn't hide the element from the accessibility tree.
    All `aria-*` attributes should have a value.

6. Style
    - https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
    - Interactive elements min size 48dp (including padding) and 32dp margin.
    - Remember high contrast mode!

---

END.
