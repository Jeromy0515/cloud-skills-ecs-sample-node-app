var express = require('express');
var app = express();
var mysql = require('mysql')
var bodyParser = require('body-parser')

const pool = mysql.createPool({
    host: 'host.docker.internal',
    user: 'root',
    password: 'Xptmxm1212!@',
    database: 'test',
    port: '3306'
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

    pool.getConnection((err, connection) => {
        if(err)
            throw err;

        connection.query('SELECT * FROM user;',
            (error, results) => {

                if(error)
                    throw error;

                res.render('index.ejs',{
                    data:results
                })
            })
    })

});

app.post('/save', (req, res) => {
    let name = req.body.name;

    pool.getConnection((err, connection) => {
        if(err)
            res.send({"save": "failed"});

        connection.query('INSERT INTO user VALUES(0,?)',[name],
            (error, results) => {

                if(error)
                    res.send({"save": "failed"});

                res.send({"save": "success"})
            })
    })
})

app.get('/health', (req, res) => {
    res.send({"status": "ok"})
})

app.all('*', (req, res) => {
    res.status(404).send('<h1 align="center">ERROR 404 NOT FOUND</h1>')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('Server Start : port 3000');
});
