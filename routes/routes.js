//Import Express
import  express  from 'express';
//Get imports
import {homePage,usPage,travels,testimonials,contact, travelsDetails} from '../controller/routesController.js' 

//Post Imports
import saveTestimonials from '../controller/testimonialController.js'

const route = express.Router();

route.get('/',homePage);

route.get('/nosotros',usPage);

route.get('/viajes',travels);

route.get('/viajes/:route',travelsDetails);

route.get('/testimoniales',testimonials);
route.post('/testimoniales',saveTestimonials);

route.get('/contacto',contact);

export default route;