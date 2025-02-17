Date:
2020-01-09 Added draft
2020-05-10 Added demo.mp4


# Simulating traffic controlled by user-provided algorithms (semaphores)

## Background

So in my Concurrent Programming class, there was this theoretique exercice ("exo 6") which was either difficult or I was dumb for not considering all scenarios and ended up proposing a stupid solution.

Somebody sorta complained about this and our cool teacher casually mentioned that for complex systems and scenarios, simulations are actually used to verify algorithms' correctness.

I liked the idea and decided to make a simple sim for that specific exercice.

Basically, you write your procedures à la C and they get simulated *live* in the browser.

> ![photo-exercise-copy] \
> The original exercise (TODO: find a real TD copy)

## Idea and requirements
I decided to use a process-based simulation using classes since The user's algorithms will be executed in multiple vehicles (think, instances as in OOP terminology).

The student provides algorithms which are written in a pseudo-language ("algorithmique") which has the same syntax and controls (if/for/while) as C (and thus JavaScript).
I thought, it would be a simple matter of: `eval` inside of `with` inside of an `async` function.

### Animation logic
A vehicle's position in line (visualization) is determined from its indexes in all the semaphore queues it enters (i.e. `p` function calls).

(TODO: Elaborate)

(TODO: Example)

### Pseudo-code
My methodology to fight procrastination: PDD -- Pseudocode-Driven Development

In one boring lecture, I started scratching a simple wireframe of this whole thing.
Later that evening, I turned it into a mockup:

> ![screenshot-drafting-mockup] \
> First mockup

And then I wrote a simple "pseudocode" of about 150 lines of JavaScript that shows how the whole thing would work.

### Explaining the magic away
So the user enters something like this:
```
// userCode
while (1) {
    sleep(15)
    if (feu == 1) {
        p(sFeu1)
        feu = 2
        v(sFeu2)
    } else {
        p(sFeu2)
        feu = 1
        v(sFeu1)
    }
}
```

We have some problems:
- `p()`, `v()`, `sleep()`, and `circuler()` are defined on the Algorithm prototype, and we need to call them with on "this".
- The afordmentioned predefined functions are async, and we need to `await` them.
  - To use `await`, we need to be inside of an `async` function.
- user-defined global variables are in a variable called `userVars`, we need to access them
- The user's code is just a string, and we need to turn it into a real invokable function.


We wanted the above code to be turned into something like this:
```js
async function userFunc() {
    with (Sim.userVars) {
        while (1) {
            await that.sleep(15)
            if (feu == 1) {
                await this.p(sFeu1)
                feu = 2
                await this.v(sFeu2)
            } else {
                await this.p(sFeu2)
                feu = 1
                await this.v(sFeu1)
            }
        }
    }
}
```

---

Solution:
- We write a function, `Algorithm.awaitifyThis`, whitch takes the raw code and replaces calls to  `p/v/sleep/circuler()` with `await this.p/v/sleep/traversee()`

- We use the deprecated "with(globalVariables)" so that the user can simply use "x" instead of "globalVariables.x"

- And finally, we wrap everything in a `try..catch` block to be able to "catch" user errors and alert them (as you have seen in the video).

- We use `AsyncFunction` to create a new async function, `asycFunc`, from the user's input.

---

Final result:

```js
class Algorithm {
  // ...
  
  async run() {
    try {
      const asyncFunc = new AsyncFunction(`
        with (Sim.userVars) {
          ${ Algorithme.awaitifyThis(this.userAlgo) }
        }
      `);
      await asyncFunc.call(this);
    } catch (userError) {
      console.error('userError', userError); // for debugging
    }
  }

  static awaitifyThis(code) {
    return code.replace(/\b(p|v|sleep|circuler)\(/g, 'await this.$1(');
  }

}
```

**Notes**:

We need to `call` our function with a specific `this` value, because:
> > Note: async functions created with the AsyncFunction constructor do not create closures to their creation contexts; they are always created in the global scope.
> 
> -- [MDN AsyncFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

## Compromises

**Cooperative concurrency** (as opposite to preemptive concurrency in Java) is good enough for our purposes, as we are not striving to simulate true parallelism.

Any call to `p()`, `v()`, `sleep()`, or `circuler()` causes the calling car to yield control, and gets scheduled in the event loop.

Because the whole system is based on Promises and not actual threads, you may need to use `sleep(0)`

The viz/animation is not guaranteed to work if you use conditionals or loops because of the simple ordering algorithm used (order vec according to calls to p).

**Semaphore**: I needed something that supports supports `getPosition(this)`.
I could have used "shared-semaphore" to implement semaphores across Web Workers which would then run in parallel but that would be too much and shared-sema won't work on all browsers. A Promise-based pseudo-parallelism is good enough...

I decided to just inform users of this limitation because they might consider using active wait loops. Although, this is very improbable since our exercise is about semaphores and active wait synchronization algorithms were only mentioned for their historical significance.

---

**Animation**: Used basic HTML elements (`div`s/`span`s) with some CSS, and JS to update the vizualization.

Anyway, I grabbed some icons, and started making it.

Positioning elements: CSS flex order.
Explain how using a 'flex layout' and the CSS order property made the job easier, compared to working with SVG for example: [Mimic Relative Positioning Inside an SVG with Nested SVGs — Sara Soueidan](https://www.sarasoueidan.com/blog/mimic-relative-positioning-in-svg).

Still, it feels like a crime against frontend development. [Sara Soueidan](https://www.sarasoueidan.com) would be very disappointed in me.

> ![screenshot-choosing-icons] \
> game-icons.net

---

The UI is still trash but you can see:

- Variables are declared as if they were "des ensembles"; we do things like this in TD...

- Uniquely-colored vehicles (cars or trucks) get randomly generated (super important).

- Traffic lights reflect the status of 'feu'.

- Cars wait for their 'feu' and their turn in their 'voie' (none of this is hard-coded: these are variables/semaphores declared by the user).

> ![screenshot-running] \
> Program running (TODO: Use an animated gif!)

## Could be better

Performance does not really matter but...

- Cache asyncFuncs to improve performace and lower memory consumptions.

- Draw using <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg">SVG</a> and animate using <a href="https://svgjs.com/">SVG.js</a>.

- Use the Phaser game engine animation and collision detection.

## Conclusions
- Promises' in depth. Microtasks vs Macrotasks.

- Live: https://dreamski21.github.io/trash/2019-12/dac-exo6/

- Source code: https://github.com/dreamski21/trash/

## Thanks
My friend and classmate Wanis for his invaluable feedback.

[photo-exercise-copy]: photo-exercise-copy.jpg
[screenshot-drafting-mockup]: screenshot-drafting-mockup.jpg
[screenshot-choosing-icons]: screenshot-choosing-icons.png
[screenshot-running]: screenshot-running.png
