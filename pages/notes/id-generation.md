# ID Generation


## Learning

- [System design : Distributed global unique ID generation | by Sandeep Verma | Medium](https://medium.com/@sandeep4.verma/system-design-distributed-global-unique-id-generation-d6a440cc8e5)
    * May 9, 2021 #liked #archived
    * Mentions different approaches, including:
        + GUID and time-based GUID
        + MongoDB's ObjectID
        + Flickr's Ticketing Service (Ticker server)
        + Twitter's Snowflake
        + Instagram Id generation

- [Ticket Servers: Distributed Unique Primary Keys on the Cheap](https://code.flickr.net/2010/02/08/ticket-servers-distributed-unique-primary-keys-on-the-cheap/)
    * Posted on February 8, 2010 by Kay Kremerskothen
    * Mentioned in Sandeep Verma's post.
    * Relies on MySQL's `REPLACE INTO`, as in
    ```sql
    REPLACE INTO Tickets64 (stub) VALUES ('a');
    SELECT LAST_INSERT_ID();
    ```
    * [ ] KAITO: Can do something similar in PostgreSQL?


## Short IDs: Projects

- [x] https://github.com/turbo/pg-shortkey
    * "YouTube-like Short IDs as Postgres Primary Keys"

- [ ] Nano ID https://github.com/ai/nanoid
    * "A tiny (130 bytes), secure, URL-friendly, unique string ID generator for JavaScript"
    * 19k stars.
    * There are other implementations for other languages (including Java).

- [ ] https://github.com/niieani/hashids.js
    * "A small JavaScript library to generate YouTube-like ids from numbers."
    * 4K stars.

- **xid** https://github.com/rs/xid
    * "xid is a globally unique id generator thought for the web"

    * "Uses the Mongo Object ID algorithm to generate globally unique ids with a different serialization (base64) to make it shorter when transported as a string"
 
    * Has ports in Java, Python, PostgreSQL, etc.

---

END.
