let app = require("./app");
let config = require("./app/config");
let MongoDB = require("./app/utils/mongodb.util");
//start server


async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connect to the database!");

        let PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect is running to the database!", error);
        process.exit();
    }
}
startServer();