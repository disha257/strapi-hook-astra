# Strapi Hook Astra


## Activating the hook
Add the following to `./config/hook.js`:

`
module.exports = {
    settings: {
        astra: {
            token: 'REPLACE_ME',
            databaseId: 'REPLACE_ME',
            databaseRegion: 'REPLACE_ME',
            keyspace: 'REPLACE_ME',
            collection: 'REPLACE_ME'
        },
    }
};`

## Local Development

`npm install --save ../path/to/mymodule`
