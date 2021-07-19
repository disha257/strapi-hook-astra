# Strapi Hook Astra

## Prerequisite 
Install node [14.17.3 version](https://nodejs.org/en/)

## Local Development
Create a Strapi Project:
```bash
npx create-strapi-app my-project
```

## Install the hook
Install this hook using: `npm i strapi-hook-astra`

## Activating the hook
Add the following to `./config/hook.js` of sample Strapi Project:

```js
module.exports = {
    settings: {
        astra: {
            enabled: true,
            token: 'REPLACE_ME',
            databaseId: 'REPLACE_ME',
            databaseRegion: 'REPLACE_ME',
            keyspace: 'REPLACE_ME',
            collection: 'REPLACE_ME'
        },
    }
};
```

- token: Generate a [token from Astra DB](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html)

- databaseId: Enter your Astra DB database ID from your database URL.

- databaseRegion: Enter your Astra DB database region.

- keyspace: Enter your Astra DB keyspace name.

- collection: Enter your Astra DB collection name.

## Usage

- Create document: 
 
`strapi.services.astra.create(document);`

| Parameter        | Type           | Explanation       | Values |
| -----------------|:--------------:| -----------------:|-------:|
| document         |json            | Create a document |var dataString = '{ "name": "John", "last_name": "Doe" }'|

- Get document by Id: 

`strapi.services.astra.getById(documentId);`


| Parameter        | Type           | Explanation                | Values |
| -----------------|:--------------:| --------------------------:|-------:|
| documentId       |string          | Get document by documentId |var dId = "your_document_id"|

- Get document by Path: 

`strapi.services.astra.getByPath();`

- Search Collection: 

`strapi.services.astra.searchCollection(query, pagesize);`

| Parameter        | Type           | Explanation                | Values |
| -----------------|:--------------:| --------------------------:|-------:|
| query            |string          | Search collection via query| var query = {"name": { "$eq": "John" }}|
| pagesize         |int             | Number of documents to fetch| int page_size = 3 |


