const Express = require('express');
const Sequelize = require('sequelize');

const app = Express();

if (process.env.NODE_ENV == "development") {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'db/database.sqlite'
      });
      console.log("Is Development");
} else {
    const sequelize = new Sequelize('mysql://root:pass@localhost:5432/fantasyleague');
    console.log("Is PROD");
}

app.listen(8080, () => {
    console.log("Server is listening on port 8080..");
});