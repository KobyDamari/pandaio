const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const sourceDir = 'dist';
const mongoose = require('mongoose');

const port = process.env.PORT || 8082;

app.use(express.static(sourceDir));
app.use(cors());

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./src/server/routes/comments'));

const uri = 'mongodb://koby:1234@bigpandaownz-shard-00-00-sdkkk.mongodb.net:27017,bigpandaownz-shard-00-01-sdkkk.mongodb.net:27017,bigpandaownz-shard-00-02-sdkkk.mongodb.net:27017/test?ssl=true&replicaSet=BigPandaOwnz-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri).then(
    () => console.log('connected'),
    err => console.log('not connected', err)
);

app.listen(port, () => {
    console.log(`Express web server started: http://localhost:${port}`);
    console.log(`Serving content from /${sourceDir}/`);
});
