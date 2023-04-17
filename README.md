# SurrealDB
Full official docs can be found here: https://surrealdb.com/docs/integration/libraries/nodejs

The **AdvancedQuery** function allows you to enter a [SurrealQL](https://surrealdb.com/docs/surrealql) query. The other functions will behave as outlined in the above docs.

You can perform operations on specific documents by using colon, e.g. Collection: `person:a1` will select the person document with id *a1*.

# Description
Budibase connector for performing CRUD ops against SurrealDB

To get started, you will want to make sure a namespace and database has been defined: https://surrealdb.com/docs/surrealql/statements/define/database

Then you can connect in Budibase:

![Screenshot 2023-04-17 at 14 50 32](https://user-images.githubusercontent.com/101575380/232504172-27e37a0c-27b9-4cd1-9d81-0b3050c1dd3f.png)

Note that `host.docker.internal` is being used here because I am running Budibase in a local docker container connecting to a local SurrealDB instance.


## Usage

### Creating a document in a collection

This is the equivalent of creating a record with the **CONTENT** keyword (https://surrealdb.com/docs/surrealql/statements/create).

If the collection does not already exist, it will be created.

![Screenshot 2023-04-17 at 14 55 36](https://user-images.githubusercontent.com/101575380/232505543-b1057683-6222-4512-ae96-2d5e1b186ebc.png)

![Screenshot 2023-04-17 at 14 55 57](https://user-images.githubusercontent.com/101575380/232505651-202095b2-c5f4-4115-866a-4cfb915b5606.png)

### Update a specific record

To update a specific record in a collection, provide the id after the collection name, separated by a colon. E.g. `person:id`

![Screenshot 2023-04-17 at 15 03 06](https://user-images.githubusercontent.com/101575380/232507585-399041c4-9803-494c-bf4d-46a4fa5e592c.png)

## Installing

Check out the docs to see how to add a custom plugin: https://docs.budibase.com/docs/custom-plugin
