---
title: Cropping videos with ffmpeg, but visually?
published: true
# description: 
tags: ffmpeg, SVG, Vue
# cover_image: https://direct_url_to_image.jpg
# Use a ratio of 100:42 for best results.
published_at: 2023-12-29 # for DEV.to
date: 2023-12-29 # for Nextra
---

There are many ways to skin a cat. The same thing can be said about editing videos.

This post is specifically about cropping.

By the end of it, you will learn about some challenges when dealing with multimedia on the Web, how to solve or avoid them, what `ffmpeg` and SVG can do, and how we could build a graphical video editor using these technologies.

The post follows the following plan:
- How normal people do it.
- My manual workflow.
- My attempt at improving this flow and making it "semi-automatic".
- Possible improvements to my attempt.
- Existing solutions that already implement those possible improvements.
- Conclusion.


## Normal way

Just use a graphical video editor like [Shotcut][shotcut].


## Manual approach

I often use a command-line program called **ffmpeg**.

Conveniently, `ffmpeg` has a filter called [**`crop`**][ffmpeg-filters-crop] that is used to crop stuff:  
`ffmpeg -i in.mp4 -filter:v "crop=out_w:out_h:x:y" out.mp4`

My usual workflow:

- **Take a snapshot**:
Using VLC's snapshot shortcut: <kbd>Shift</kbd> + <kbd>S</kbd>.  
But I have a habit of using the following instead: <kbd>Menu</kbd> or right click > <kbd>V</kbd> > <kbd>V</kbd> > <kbd>S</kbd>.  
On Windows, the snapshot will be saved in `~/Pictures/`.  
![VLC - Taking a snapshot][vlc-taking-snapshot]

- **Define parameters**:
Using Inkscape: 
1. Import the snapshot to a new document.
2. Draw a rectangle (hotkey: <kbd>R</kbd>).
3. Copy the `rect`'s values: `x`, `y`, `w`, and `h`.

![Inkscape - Drawing a rectangle][inkscape-rect]

- **Cropping**:
Using ffmpeg:
`ffmpeg -i in.mp4 -filter:v "crop=607:1080:819:0" out.mp4`

- **Done**.
![VLC - Showing the cropped output][vlc-cropped-output]

Why not use a proper (GUI) video editor?
Laptop too shit.

Also, this is not a huge issue since I hardly ever need to perform this.
Still, I thought I might as well try to automate it... or make it "semi-automatic" at least.


## Semi-automatic approach

Let's write a simple web app that helps us crop stuff using ffmpeg: _ffmpeg crop helper_.

The idea is simple:
- Display an `img` or `video` (the **original media**).
- Display a resizable and moveable overlay (the **crop mask**).
- Generate an output based on the overlay's size and position.

### Dimensions problem

Let's consider an example with specific dimensions to illustrate a possible challenge.

**Original image dimensions:**
- Original image width: 1000 pixels
- Original image height: 800 pixels

**Transformation:**
- The image is displayed on a webpage and is scaled down by 50%.

**New image dimensions:**
- Scaled image width: 500 pixels (50% of 1000)
- Scaled image height: 400 pixels (50% of 800)

Now, let's assume we want to define a crop area on this scaled image using traditional coordinate systems without considering scaling.

**Traditional coordinates:**
- We want to crop a rectangular area starting from (100, 100) and with dimensions (300 x 200).

**Challenge:**
- In the original coordinate system, the starting point (100, 100) refers to a location on the original image with dimensions (1000 x 800).
- However, when the image is scaled down, the coordinate (100, 100) on the scaled image does not correspond to the same absolute location on the original image.

**Meaning:**
- If we use the same coordinates without considering the scaling, our crop area will be misplaced, and the dimensions won't be accurate.

Also, keep in mind the size of the element (image in our example) may change dynamically due to the environment: screen rotation, styles added, etc.

---

**Solution:**  
We need to convert values between coordinate systems. Geometry problem. Math. I can't be bothered with that.

**Actual solution:**  
Instead, let's keep everything (the image and crop mask) in a shared coordinate system so we don't have to convert anything.
It should be able to scale freely.
That description kinda feels like SVG and its [`viewBox` attribute][svg-viewBox]. **SVG is our canvas.**

As for the original media, we can use the [`foreignObject`][svg-foreignObject] SVG tag to embed an HTML `video` or `img` element. **This is the original media.**

A `rect`angle can be used to define **the crop area.**

Using SVG satisfies the need for a consistent coordinate system. With `viewBox`, we can define the coordinate system based on the original image dimensions, even when the image is scaled or transformed, ensuring accurate and consistent positioning of elements within the SVG canvas.

---

**UX**

There is no building way to make an element (HTML or SVG) easily resizable and moveable. And, no, [CSS `resize` attribute][css-resize] does not help much.

To build a decent UI, we need to create different event handlers (like at corners) and manage different mouse/pointer events.  
I've done something similar in Java (Swing); it's bothersome and hard to get right; I don't wanna redo it again, so a crude solution will have to do... for now.

Let's just display various inputs and let the user change them.

### Pseudocode

```html
<form>
    Original file:
    <input type="file" accept="image/*,video/*" />

    Crop area:
    Width <input value="$out_w" type="number" min="0" max="$orig_width" />
    Height <input value="$out_h" type="number" min="0" max="$orig_height" />
    X <input value="$out_x" type="number" min="0" max="$orig_width" />
    Y <input value="$out_y" type="number" min="0" max="$orig_height" />
</form>

<svg viewBox="0 0 $orig_width $orig_height">
    <foreignObject class="crop-object">
        <img /> or <video />
    </foreignObject>

    <rect class="crop-mask" />
</svg>

<output>
    <code>
    ffmpeg
        -i in.mp4
        <b>-filter:v "crop=$out_w:$out_h:$out_x:$out_y"</b>
        out.mp4
    </code>
</output>
```


### Some implementation details


Some implementation details (or problems) worth mentioning:
- How do we know when the media has loaded?
- How to get the original media's dimensions (intrinsic width and height)?

When:

- For **img**: `load` event fires whenever the `src` resource loads.
It fires even if we set `img.src = img.src`.

- For **video**: `loadedmetadata` event when the video's metadata is loaded. _This includes its dimensions._

Intrinsic dimensions:

- For **img**: `.naturalWidth` and `.naturalHeight`.

- For **video**: `.videoWidth` and `.videoHeight`.

Why couldn't both **img** and **video** properties be called `intrinsicWidth` and `intrinsicHeight`? Web things, I guess.


### Rough implementation

I built a rough implementation in Vue.

It works as described above and supports both images and videos.

![Selected nothing][demo-selected-nothing]
![Selected an image][demo-selected-image]
![Selected a video][demo-selected-video]

**Possible improvements**:
- Resize and move the crop area using a pointer (mouse).
- Preview the output.
- Drag and drop files.
- Define presets (like common aspect ratios).
- ~~Automatically determine the file type (image or video).~~

It's unlikely that I implement them anytime soon. After all, this was just a proof-of-concept.

_What concept?_ You ask. I'll answer that in a bit.


## Existing solutions

There exist many projects that address the mentioned "possible improvements".

Other than dedicated video editors, some open-source projects serve as graphical user interfaces for ffmpeg:

- [Marco's clip](https://github.com/Nemo64/clip) is my favorite by far.  
It also supports clipping, and compression, provides presets (aspect ratios), and allows the user to drag and drop the video file. And it works entirely in the browser.
Overall, its UX is epic.

- Another one is Manfred's [jib-FFmpeg](https://github.com/jibbex/jib-FFmpeg), which is described as "_Yet another graphical user interface for FFmpeg_".
I haven't tried it, but it seems unmaintained and depends on `react-image-crop`.

- [`react-image-crop`][react-image-crop] and similar components let you define the cropping area for images, videos, or other elements.
It handles the conversion between coordinate systems (not sure about layout shifts).
We could use it.


## Conclusion

**Takeaway:** There are many ways to solve a problem.
![Alice to Cheshire Cat: And if not, there may be more than one way to skin a cat, if you'll pardon the expression.][alice-skin-a-cat]

Also, FFmpeg and SVG are cool. JavaScript, not so much.

The goal of this project was to test the concept of using SVG to avoid coordinate transformation challenges while creating a video editor. The proof-of-concept works as expected.

If you are curious, you can check it:
- Live: https://ffmpeg-crop-helper.vercel.app
- Source code: https://github.com/djalilhebal/ffmpeg-crop-helper

[ffmpeg-filters-crop]: https://ffmpeg.org/ffmpeg-filters.html#crop "FFmpeg Filters Documentation"

[shotcut]: https://shotcut.org "Shotcut is a free, open source, cross-platform video editor."
[react-image-crop]: https://github.com/DominicTobias/react-image-crop

[svg-viewBox]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
[svg-foreignObject]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject
[css-resize]: https://developer.mozilla.org/en-US/docs/Web/CSS/resize

<!-- DEV.to images -->
[vlc-taking-snapshot]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zql4hx6yxt1zv7u3f7dl.png
[inkscape-rect]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hfgmghdxlf8a3mzaizhk.png
[vlc-cropped-output]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cwk31k9zgqhrabv8laae.png
[demo-selected-nothing]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/01rtywuwy24sfdivrmq1.png
[demo-selected-image]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2nwnlbaswfmocaccjlma.png
[demo-selected-video]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/16dq1j95udud0utfnjsm.png
[alice-skin-a-cat]: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytzmfpkkrm3eql0szc49.png

<!-- local images -->
[vlc-taking-snapshot]: ./vlc-taking-snapshot.png
[inkscape-rect]: ./inkscape-rect.png
[vlc-cropped-output]: ./vlc-cropped-output.png
[demo-selected-nothing]: ./ffmpeg-crop-helper-0.0.1-empty.png
[demo-selected-image]: ./ffmpeg-crop-helper-0.0.1-image.png
[demo-selected-video]: ./ffmpeg-crop-helper-0.0.1-video.png
[alice-skin-a-cat]: ./alice-skin-a-cat.png
