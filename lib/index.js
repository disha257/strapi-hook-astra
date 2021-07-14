// This is the main javascript which will help you
// execute get/post/put/delete queries to Astra Cassandra database

const axios = require('axios');

module.exports = strapi => {
  return {
    async initialize() {
      const {
        token,
        databaseId,
        databaseRegion,
        keyspace,
        collection
      } = strapi.config.hook.settings.astra;

      const instance = axios.create({
        baseURL: `https://${databaseId}-${databaseRegion}.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/`,
        timeout: 30000,
        headers: {
          'X-Cassandra-Token': token,
          'Content-Type': 'application/json'
        }
      })

      strapi.services.astra = {

        // creating the document
        create: async (document) => {
          return await instance.post(collection, document)
            .then((results) => {
              return results.data;
            });
        },


        // Getting the document data using document id
        getById: async (documentId) => {
          return instance.get(collection + '/' + documentId)
            .then((results) => {
              return results.data;
            });
        },

        // Getting the document via document path and returns the most recent entry of data in that specific document
        getByPath: async () => {
          return instance.get(collection)
            .then((results) => {
              return results.data;
            });
        },

        // searching the document via document name
        searchCollection: async (query, pageSize = 3) => {
          return instance.get(`${collection}?where=${JSON.stringify(query)}&page-size=${pageSize}\``)
            .then((results) => {
              return results.data;
            });
        },
      }
    },
  };
};
