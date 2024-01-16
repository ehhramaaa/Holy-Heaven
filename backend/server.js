const express = require('express');
const cors = require('cors');
const db = require('./models')
const app = express();

const corsOption = {
    origin: "*"
}

app.use(cors(corsOption));
app.use(express.json());
// app.use(express.static(__dirname + "/client/"));
const server = require('http').createServer(app);

(async () => {
    try {
        const mongoseeConf = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    
        await db.mongosee.connect(db.url, mongoseeConf)
            .then(() => console.log('Successfully Connect MongoDb'))
            .catch(err => {
                console.log(`Connect MongoDb Error : ${err.message}`)
            })
    
    
        require("./routes/users.route")(app);
    
        const PORT = process.env.PORT || 4444;
        server.listen(PORT, () => console.log(`Server Succesfully Running In Port : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
})()