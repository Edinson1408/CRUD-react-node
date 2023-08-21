import express from "express";
import cors from 'cors';

//*importando la base de datos */
import db from "./database/db.js";
//*Importando las rutas  */
import blogRouter from "./routes/routes.js";



const app=express()

app.use(cors());
app.use(express.json());
app.use('/blogs',blogRouter);


try {
    await db.authenticate();
    console.log('conexion exitosa ala base de datos');
} catch (error) {
    console.log(`El error de conexion es : ${error}`);
}

// app.get('/',(req,res)=>{
//     res.send("Hola mundo ")
// })



app.listen(8000,()=>{
    console.log('server running in http://localhost:8000/');
})