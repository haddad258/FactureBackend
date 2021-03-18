const knex = require('knex');

const env = require('./env');

const connection = knex(env.databaseConfig);

connection.batchUpdate = (table, data) => {

    const { sql, bindings } = connection
    .insert(data)
    .into(table)
    .toSQL();

    return connection.raw(sql.replace('insert', 'replace'), bindings);
}

// Logging: uncomment if debugging is needed
// connection.on('query', e => console.log(e));

module.exports = connection;