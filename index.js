import express from 'express'
import postRouter from './src/modules/posts/products.routes.js'
import connection from './db/connectionDB.js';
import cors from 'cors'
const app = express()
const port = process.env.port || 3000

connection

app.use(cors());
app.use(express.json());
app.use("/products",postRouter)



app.use("*",(req,res)=>{
    res.status(404).json({
        msg : "Page NOT Found !"
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))