const catchError = require('../utils/catchError');
const Country = require('../model/Country.js');

const getAll = catchError(async(req, res) => {

    
    const countrys = await Country.findAll()
    return res.json(countrys)
});
// los nombres deben ser igual si o si
const create = catchError(async(req, res) => {
    // console.log( res.body);
    const { name, languaje, currency, flagUrl, continentId } = req.body //desestructuramos para modificar
    const country= await Country.create({
        name, languaje, currency, flagUrl, continentId
    });
    return res.status(201).json(country);
})

const getOne = catchError(async(req, res) => {
    const {id} = req.params;
const country = await Country.findByPk(id);
if(!country) return res.status(404).json({menssage: "Country not fonud"});
return res.json(country);
})
const remove = catchError(async(req, res) => {
    const {id} = req.params;
     const country= await Country.destroy({ where: { id }})
     if(country === 0) return res.status(404).json({ menssage: "Country not found"}); 
    return res.sendStatus(204); //el send no se encadena
})
const update = catchError(async(req, res) => { 
    const {id} = req.params;
    const { name, languaje, currency, flagUrl, continentId  } = req.body
   const country = await Country.update(
        {
            name, languaje, currency, flagUrl,continentId
        },
        {
            where: {id}, returning:true
        }
    );
    if( country[0] === 0) return res.status(404).json({menssage: "Country not found"});
    return res.json(country[1][0]); 
})


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update


}