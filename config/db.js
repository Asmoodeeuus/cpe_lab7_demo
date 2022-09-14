var mysql = require ('mysql');

var connection = mysql.createConnection
(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cpe_lab7_demo',
}
);

connection.connect(function(error) 
{
    if (!!error) {console.log(error);}
    else {console.log('MySQL Database is Connected..!')};
});
module.exports = connection;
