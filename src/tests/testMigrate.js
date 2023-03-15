const sequelize = require('../utils/connection');
const createCities = require('./createData/createCities');


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        // funciones de create...
        await createCities();        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();