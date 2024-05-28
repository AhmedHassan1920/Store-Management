import mysql from 'mysql2';


const connection = mysql.createConnection("mysql://umjawifo67wdqiaa:vEtPpkZa1jsgedVhbih2@bql8vm5lyrkhuzjwbyzh-mysql.services.clever-cloud.com:3306/bql8vm5lyrkhuzjwbyzh")


connection.connect((err)=>{
    if(err){
        console.log(err);
    }else
    {
        console.log("DB connected !");
    }

})


export default connection