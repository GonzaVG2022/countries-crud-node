const City = require('../../model/City');


const createCities = async() => {
    const cities = [
    {
        name: 'Lujan',
        area:17,
        isCapital: false
    },
    {
        name:'to delete',
        area:20,
        isCapital: false
    }
]
await City.bulkCreate(cities);
};

module.exports = createCities;