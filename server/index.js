
// import { dp } from './bd';


const express = require('express');
var app = express();
const mysql = require('mysql');
var cors = require('cors');
const multer = require('multer');




app.use(cors());
app.use(express.json());



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



const DB_HOS = process.env.DB_HOST || 'localhost';
const DB_USE = process.env.DB_USER || 'root';
const DB_PASSWOR = process.env.DB_PASSWORD|| '';
const DB_NAM = process.env.DB_NAME || 'empresa_v1';
const DB_POS = process.env.DB_POST || '3001';
const POST = process.env.POST || '3001';

const db = mysql.createConnection({
    host: DB_HOS,
    user: DB_USE,
    password: DB_PASSWOR,
    database: DB_NAM,
    post: DB_POS,
});


app.get('/pin',(req,res)=>{
  res.send("host" + DB_HOS + "user" + DB_USER)}
    )



app.get('/ping',(req,res)=>{
    res.send(DB_PASSWORD)}
      )


app.get("/agregar", async (req, res) => {
  const result = await db.query('INSERT INTO cliente(nombre) VALUES("angel") ')
  console.log(result)
})


app.listen(DB_POS,()=>{   
    console.log("corriendo en el puerto", DB_POS)
    
})



