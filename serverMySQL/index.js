const connection = require("./server.js");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    getAllUsers() {
     
        return this.connection.promise().query(
            "SELECT * FROM savedusers LEFT JOIN basicpower on savedusers.basicpower_id LEFT JOIN specialpower on savedusers.specialpower_id;"
        );
    }
}

module.exports = new DB(connection)