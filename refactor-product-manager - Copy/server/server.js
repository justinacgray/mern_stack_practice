const express = require('express');
const app = express();
const cors = require('cors');


const routes = require('./routes/product.routes');
require('./config/mongoose.config');


app.use(cors());
app.use(express.json(),express.urlencoded({ extended : true }));
const port = 8000;

routes(app);    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

