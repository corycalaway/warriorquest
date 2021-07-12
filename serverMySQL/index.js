const connection = require("./server.js");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    getAllUsers() {
     
        return this.connection.promise().query(
            "SELECT * FROM savedusers;"
        );
    }
}

module.exports = new DB(connection)