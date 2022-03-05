import  Sequelize  from "sequelize";
import db from "../server/config/db.js";

//We have to declare all the fields that exist in the database to be used in the queries
const TestimonialDB = db.define('testimoniales',{
    
    name: {
        type: Sequelize.STRING,
    },

    email: {
        type: Sequelize.STRING,
    },

    message: {
        type: Sequelize.STRING,
    },

});

export default TestimonialDB;