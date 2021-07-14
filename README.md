# Strapi Hook Astra

## Install
```bash
yarn add strapi-hook-astra
```

## Activating the hook
Add the following to `./config/hook.js`:

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

## Local Development
1. Clone a sample Strapi project
2. Install this plugin with: `npm install --save ../path/to/mymodule`
