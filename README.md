# SurrealDB
Full official docs can be found here: https://surrealdb.com/docs/integration/libraries/nodejs

The **AdvancedQuery** function allows you to enter a [SurrealQL](https://surrealdb.com/docs/surrealql) query. The other functions will behave as outlined in the above docs.

You can perform operations on specific documents by using colon, e.g. Collection: `person:a1` will select the person document with id *a1*.

# Description
Budibase connector for performing CRUD ops against SurrealDB

Find out more about [Budibase](https://github.com/Budibase/budibase).

## Instructions

To build your new  plugin run the following in your Budibase CLI:
```
budi plugins --build
```

You can also re-build everytime you make a change to your plugin with the command:
```
budi plugins --watch
```
