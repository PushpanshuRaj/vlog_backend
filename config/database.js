const mongoose= require("mongoose");
require("dotenv").config();

const connectWithDb = ()=>{
      mongoose.connect(process.env.DATABASE_URL)
       .then(() => console.log('DB connected Successful'))
       .catch((error) => {
            console.log("Issue in DB Connection");
            console.error(error.message);
            process.exit(1);
       });
}

module.exports = connectWithDb;