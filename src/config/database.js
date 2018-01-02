const mySql = require('mysql');

const databaseConnection = () => {

  return mySql.connection({
    host : 'localhost',
    user : 'root',
    password : 'brandao00',
    database : 'produtividade-nivel-a'
  });
};

module.exports = () => {
  console.log(mySql);
  return databaseConnection;
}
