# Differentiating between requests and responses
_#SoftwareDesign_ I guess

Why? To avoid an infinite loop in server-server (or peer-to-peer) communications.

## Approaches

### HTTP

Using the message structure.  
An HTTP message consists of two main parts: the **request line** (for requests) or the **status line** (for responses), the headers, and the optional body.

```
HTTP Request:
GET /path/to/resource HTTP/1.1
Host: example.com
[Other Headers]

HTTP Response:
HTTP/1.1 200 OK
Content-Type: text/html
[Other Headers]
[Response Body]
```

Related:
- Grizzly has `HttpHeader.isRequest()`

### MQTT

Using message types.
There is generally a type for request and a type for response,
e.g. `SUBSCRIBE` and `SUBACK`, and even `PINGREQ` and `PINGRESP`.

Check the section **2.1.2 MQTT Control Packet type**.
https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html

IRC is similar.  
There are success replies (`RPL_*`) and errors (`ERR_*`) for most commands,
e.g. `WHOIS`, `RPL_WHOISUSER`, `RPL_ENDOFWHOIS`, `ERR_NOSUCHNICK`, `ERR_NONICKNAMEGIVEN`, just to list a few.

Related:
- https://rsocket.io/about/protocol
- https://docs.oracle.com/javase/9/docs/api/java/util/concurrent/Flow.html

---

END.
