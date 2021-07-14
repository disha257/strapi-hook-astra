// This is the main javascript which will help you
// execute get/post/put/delete queries to Astra Cassandra database

const request = require('request');

module.exports = strapi => {
  return {
    async initialize() {

      console.log('initializing hook')
      const {
        token,
        databaseId,
        databaseRegion,
        keyspace,
        collection
      } = strapi.config.hook.settings.astra;

      const headers = {
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json'
      };

      const urlIni = `https://${databaseId}-${databaseRegion}.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/`;

      strapi.services.astra = {

        // creating the document
        create: async (document) => {
          const options = {
            url: urlIni + collection,
            method: 'POST',
            headers: headers,
            body: document
          };
          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },


        // Getting the document data using document id
        getById: async (documentId) => {
          const options = {
            url: urlIni + collection + '/' + documentId,
            method: 'GET',
            headers: headers,
          };
          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },

        // Getting the document via document path and returns the most recent entry of data in that specific document
        getByPath: async () => {
          const options = {
            url: urlIni + collection,
            method: 'GET',
            headers: headers,
          };

          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },

        // searching the document via document name
        searchCollection: async (query, pageSize = 3) => {
          const options = {
            url: `${urlIni}${collection}?where=${JSON.stringify(query)}&page-size=${pageSize}`,
            method: 'GET',
            headers: headers,
          };

          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },
      }
    },
  };
};
