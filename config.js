const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "127.0.0.1",
    user: "restapitest123",
    password: "restapitest123",
    database: "restapitest123",
    connectTimeout: 60000,
    multipleStatements: true
  },
  listPerPage: 5,
};
module.exports = config;
