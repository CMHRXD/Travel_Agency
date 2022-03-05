import TestimonialDB from "../model/TestimonalModel.js";

const saveTestimonials = async (req, res)=>{
    
    const {name,email,message} = req.body;
    const errors = [];

    //check empty fields and validate email
    if(name.trim() === ""){
        errors.push({mensaje: 'El nombre esta vacio'});
    }else{
        if(/[$%&|<>#]/.test(name)){
            errors.push({mensaje: 'El nombre no es valido'});
        }
    }
    
    if(email.trim()=== ""){
        errors.push({mensaje: 'El email esta vacio'});
    }else{
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!er.test(email)){
            errors.push({mensaje: 'El email no es valido'});
        }
    }

    if(message.trim() === ""){
        errors.push({mensaje: 'El mensaje esta vacio'});
    }else{
        if(/[$%&|<>#]/.test(message)){
            errors.push({mensaje: 'El mensaje no es valido'});
        }
    }

    if(errors.length>0){
        //Consult testimonials DB
        const data =  await TestimonialDB.findAll();
        
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errors,
            name,
            email,
            message,
            data,
            
        })
    }else{
        try {
            await TestimonialDB.create({
                name,
                email,
                message,
            });

            res.redirect('/testimoniales')
            
        } catch (error) {
            console.log(error);
        }
        
    }
} 
 
export default saveTestimonials;