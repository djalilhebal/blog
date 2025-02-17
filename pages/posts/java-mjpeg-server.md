# M-JPEG in Java SE
#java #mjpeg

Was looking for a simple video format that supports [VFR][wikipedia-VFR] and streaming (see [Comparison of video container formats][wikipedia-container-formats]).

- M-JPEG was the simplest option. Just send images whenever.

- Ogg seems better: Modern and well supported, open source, and works well with "discontinuous" streams.
    * [Ogg bitstream overview | Ogg Documentation](https://xiph.org/ogg/doc/oggstream.html)

[wikipedia-VFR]: https://en.wikipedia.org/wiki/Variable_frame_rate
[wikipedia-container-formats]: https://en.wikipedia.org/wiki/Comparison_of_video_container_formats
[wikipedia-RFB]: https://en.wikipedia.org/wiki/RFB_protocol

---

- [Motion JPEG | Wikipedia](https://en.wikipedia.org/wiki/Motion_JPEG):
> ## Video streaming
> HTTP streaming separates each image into individual HTTP replies on a specified marker.
> HTTP streaming creates packets of a sequence of JPEG images that can be received by clients such as QuickTime or VLC.
>
> In response to a GET request for a MJPEG file or stream, the server streams the sequence of JPEG frames over HTTP.
> A special mime-type content type `multipart/x-mixed-replace;boundary=<boundary-name>` informs the client to expect several parts (frames) as an answer delimited by `<boundary-name>`. This boundary name is expressly disclosed within the MIME-type declaration itself.
> The TCP connection is not closed as long as the client wants to receive new frames and the server wants to provide new frames.

- [x] [multipart/x-mixed-replace | Tcler's Wiki](https://wiki.tcl-lang.org/page/multipart%2Fx-mixed-replace)
    * "Google Chrome version 29 and later has limited it to images."

- `multipart/x-mixed-replace` Not mentioned on [Content-Type | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)


- [x] REAED:
[Video Streaming with Flask - miguelgrinberg.com](https://blog.miguelgrinberg.com/post/video-streaming-with-flask/page/8)
#archived #opinion:fine

## HTTP server

- [x] [Is it okay to use com.sun.net.httpserver.HttpServer? - DEV Community](https://dev.to/thokuest/is-it-okay-to-use-comsunnethttpserverhttpserver-24il)
    * TLDR: Yes.


- NanoHTTPD (https://github.com/NanoHttpd/nanohttpd)
    * KAITO: Used in Attendz. Good enough.
- Eclipse Grizzly
    * https://javaee.github.io/grizzly/index.html
    * https://eclipse-ee4j.github.io/grizzly/
- Eclipse Jetty


## A la VNC

- VNC/[RFB protocol][wikipedia-RFB] inspired. \
KAITO: This is big brain:
> ## Operation
> . . . a server can connect to a viewer in "listening mode" on port 5500. One advantage of listening mode is that the server site does not have to configure its firewall to allow access on port 5900 (or 5800); the duty is on the viewer, which is useful if the server site has no computer expertise and the viewer user is more knowledgeable.

### VNC

- VNCServer https://github.com/josephcopenhaver/VNCServer
    * :green_square: Pure Java implementation.
    * :yellow_square: It uses `RobotPeer#getRGBPixels`
        + `Robot#createScreenCapture` uses that method to capture pixels and generate a `BufferedImage`.
    * :yellow_square: Undocumented.


- PPM image format
    * KAITO: Get pixels and draw them to a PPM file.
    * Supported by DirectX 9.
    * Easy to implement in Java.

## Related

- [ ] [How to transmit live video from within a Java application? - Stack Overflow](https://stackoverflow.com/questions/3214422/how-to-transmit-live-video-from-within-a-java-application)
