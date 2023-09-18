import app from './server.js';
import connectionDB from '../database/db.js';


const port = 3000;

app.listen(port, ()=>{
    try{
    connectionDB();
    console.log(`Server listen at port ${port}`);
    }catch(error){
        console.log('Ocorreu um erro: ', error);
    }
})