# WebRTC


## Projects

- **Feathers** https://github.com/feathersjs/feathers
    "A framework for real-time applications and REST APIs with JavaScript and TypeScript"
    * [ ] KAITO: What does it do exactly?

- [ ] CHECK: https://github.com/tking/JSTUN
    * "Java Simple Traversal of User Datagram Protocol (UDP) Through Network Address Translation (NAT)"


## Architecture

TLDR:
- TURN is a relay server

- ICE
https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment

- STUN
https://en.wikipedia.org/wiki/STUN

- TURN
https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT


## Learning

- [What are STUN and TURN Servers? (WebRTC Tips from WebRTC.ventures) | YouTube](https://www.youtube.com/watch?v=4dLJmZOcWFc)
    * Opinion: ok

- [STUN/TURN Servers and Private Networks (WebRTC Tips by WebRTC.ventures) | YouTube](https://www.youtube.com/watch?v=N5cqu0kTIsw)
    * Opinion: ok


### NOTES: Architectures for a kickass WebRTC application
by Tom Moor
https://www.youtube.com/watch?v=m9QxBc0OeoI

Notes:
NONE.

### NOTES: Servers for WebRTC: It is not all Peer to Peer
Speaker: Chad Hart
Conf: Kranky Geek WebRTC Brazil 2016
Channel: Google Chrome Developers
Link: https://www.youtube.com/watch?v=Y1mx7cx6ckI

_Key Topics: Signaling considerations, ICE, STUN, TURN details, media servers, gateways_

- Call flow diagram
https://youtu.be/Y1mx7cx6ckI?t=104

- SDP = Session Description Protocol
Signaling is transfering SDP (params) between browers.

- There are two types of ICE candidates: `host` (local address), STUN (reflexic), and TURN (relay).

- To solve the "mesh problem", we can use these approaches:
    * Multipoint Control Unit (MCU) https://youtu.be/Y1mx7cx6ckI?t=1806
    * Selective Forwarding Unit (SFU) https://youtu.be/Y1mx7cx6ckI?t=1919
    * SFU with Multicast https://youtu.be/Y1mx7cx6ckI?t=2014
    You send two streams full resolution and a low bitrate stream (thumbnail), since usecases  (as in Discord or Skype) usually there is 1 active talker (the presenter or streamer) and other participants, whom we don't want to watch in full HD.
    This is the state of the art (at least in 2016).

- How to get/use a media server (not categorized by their approaches):
    - Open source:
        * Licode https://github.com/lynckia/licode
        * ...

### NOTES: How to Build an End-to-End WebRTC Service (Kranky Geek WebRTC Brazil 2016)
By Daniel  
https://www.youtube.com/watch?v=nPnWIuAlphc  
opinion: ok

Talks about:
- Mainly WebRTC Signaling
- Quality of Service (at least once, exactly once, etc.)
- DNS-based system sharding

### NOTES: How Does WebRTC Work? - Crash Course
By Dennis Ivy \
Apr 1, 2022 \
https://www.youtube.com/watch?v=8I2axE6j204

- Opinion: Meh.

- Abandonned (stopped watching).

- Notes:
    * **Trickling ICE Candidates**: Instead of generating the SDP _and_ obtaining our ICE candidates (from a STUN server for example) to send them together to our peer, we can send SDP first then follow up with ICE candidates.

- Video description:
```
WebRTC introduction and complete project based tutorial. Build a small peer to peer video chat application with signaling.

Check out the related blog post that goes with this video here: https://medium.com/agora-io/how-does-webrtc-work-996748603141

Create your agora.io app here: [...]

Source code: https://github.com/divanov11/WebRTC-Crash-Course

Slide show images are provided in the source code.

Live demo: https://divanov11.github.io/WebRTC-Simple-SDP-Handshake-Demo/

Timestamps
00:00 - Intro
00:35 - WebRTC Intro Slides
12:05 - Project Files Setup
19:40 - Display Camera to Page
23:28 - Peer Connection (SDP Offer & Answer)
46:00 - Signaling with Agora
```

---

END.
