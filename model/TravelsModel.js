import  Sequelize  from "sequelize";
import db from "../server/config/db.js";

//We have to declare all the fields that exist in the database to be used in the queries
const TravelsDB = db.define('viajes',{
    
    titulo: {
        type: Sequelize.STRING,
    },

    precio: {
        type: Sequelize.STRING,
    },

    fecha_ida: {
        type: Sequelize.DATE,
    },

    fecha_vuelta: {
        type: Sequelize.DATE,
    },

    imagen: {
        type: Sequelize.STRING,
    },

    descripcion: {
        type: Sequelize.STRING,
    },

    disponibles: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
});

export default TravelsDB;