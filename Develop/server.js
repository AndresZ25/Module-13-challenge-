const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const apiRoutes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use('/api', apiRoutes); 

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});