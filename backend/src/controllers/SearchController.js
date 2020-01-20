const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//Criar os outros metodos que faltam, update e destroy

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        console.log(techsArray, latitude, longitude);

        return response.json({ devs });
    }
}