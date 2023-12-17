---
permalink: json-in-postgresql
---

# JSON in PostgreSQL

SQL/JSON path support was added to Postgres 12.

- [PostgreSQL: Documentation: 12: 8.14. JSON Types - 8.14.6. jsonpath Type](https://www.postgresql.org/docs/12/datatype-json.html#DATATYPE-JSONPATH)

- [PostgreSQL: Documentation: 12: 9.15. JSON Functions and Operators](https://www.postgresql.org/docs/12/functions-json.html#FUNCTIONS-SQLJSON-PATH)

PostgreSQL 12 features [^postgres12released][postgres12released]:
- **Generated Columns** Similar to Vue's _computed properties_.
[PostgreSQL: Documentation: 12: 5.3. Generated Columns](https://www.postgresql.org/docs/12/ddl-generated-columns.html)

- **JSON path expressions**
[PostgreSQL: Documentation: 12: 9.15. JSON Functions and Operators - 9.15.2. The SQL/JSON Path Language](https://www.postgresql.org/docs/12/functions-json.html#FUNCTIONS-SQLJSON-PATH)

[postgres12released]: https://www.postgresql.org/about/news/postgresql-12-released-1976/
PostgreSQL: PostgreSQL 12 Released!
Visited 2022-07-02

---

> ## Things to Avoid: JSON Anti-Patterns
> As with everything in computer science, JSON is not a silver bullet. It adds more flexibility to the relational data model, but there are still some JSON anti-patterns to be wary of:
> 
> - **Modeling relational data**. JSON is not a replacement for row stores. JSON is still significantly slower than regular row based data because of lack of statistics. This is a known limitation if you are planning to use JSON for analytical queries as it is simply impossible to build statistics for a schema less architecture.
>
> - **Replacing NoSQL**. JSONB is still not a replacement for NoSQL systems [...].
>
> - **Size**. JSONB content and GIN indexes take a lot more space [...] and it is hard to table partitioning when compared to row based data. So one should be very mindful of the data scale as PostgreSQL cannot horizontally scale like other NoSQL database systems.
>
> - **Joins**. It is difficult to do normalization with one-to-many, many-to-many relationships with JSON type. JSON not meant for normalized data and doing joins is an anti-pattern and will lead to performance problems.
>
> -- Forget SQL vs NoSQL - Get the Best of Both Worlds with JSON in PostgreSQL
https://arctype.com/blog/json-in-postgresql/


## References

- [Arctype.com's Forget SQL vs NoSQL - Get the Best of Both Worlds with JSON in PostgreSQL](https://arctype.com/blog/json-in-postgresql/)
Visited 2022-07-02

---

END.
