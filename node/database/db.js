import {Sequelize} from 'sequelize';


const db= new Sequelize('jntencion_matricula','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db;