import TravelsDB from "../model/TravelsModel.js";
import TestimonialDB from "../model/TestimonalModel.js";

const homePage = async (req, res)=>{ //req: request-lo que enviamos   --   res: response-lo que express responde

    const consults = []
    consults.push(TravelsDB.findAll({ limit: 3 }));
    consults.push(TestimonialDB.findAll({ limit: 3 }));

    try {
        const result = await Promise.all(consults); //Execute the consults at the same time
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            travels: result[0],
            data: result[1],
        });
        
    } catch (error) {
        console.log(error);
    }
    
};

const usPage = (req, res)=>{ //req: request-lo que enviamos   --   res: response-lo que express responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const travels = async(req, res)=>{ //req: request-lo que enviamos   --   res: response-lo que express responde
    //Consult DB
    const travels = await TravelsDB.findAll()
    res.render('viajes', {
        pagina: 'Viajes',
        travels,// travels = travels
    });
}

const travelsDetails = async(req, res)=>{
    
    const {route} = req.params

    try {
        const travel  = await TravelsDB.findOne({where: {slug: route}})

        res.render('detalleViaje', {
            pagina: 'Informacion del Viaje',
            travel,
        })
    } catch (error) {
        console.log(error)
    }
}

const testimonials = async(req, res)=>{ //req: request-lo que enviamos   --   res: response-lo que express responde
    try {
        const data = await TestimonialDB.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            data,
        });
        
    } catch (error) {
        console.log(error)
    }

    
}
const contact = (req, res)=>{ //req: request-lo que enviamos   --   res: response-lo que express responde
    res.send('contacto');
}

export {
    homePage,usPage,travels,testimonials,contact,travelsDetails
}