const usersCtrl = {};
const passport = require('passport');
const User = require('../models/User');
/*
usersCtrl.renderSignUpFrom = (req, res)=>{
    res.render('users/signup');
}

usersCtrl.signup = async (req,res)=>{
    const errors = [];
    const {name, email, password, confirm_password}= req.body;
   
   if(password != confirm_password){
       errors.push({text: 'Contraseña no coinciden.'});
   }
   if(password.length < 4){
       errors.push({text: 'La Contraseña debe llevar mas de 4 caracteres.'});
   }
   if(errors.length > 0){
       res.render('users/signup', {
           errors,
           name,
           email
       });
   }else{
       const emailUser = await User.findOne({email: email});
       if(emailUser){
           
           res.render('users/signup');
       } else{
           const newUser = new User({name, email, password});
           newUser.password = await newUser.encryptPassword(password);// sifra contraseña
           await newUser.save();
           
           
           res.redirect('/users/signin');
       }
   }

}*/
////////////////////////////////////////////////////////////////////

//https://youtu.be/NN-Jt6EjFAc?list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy
// ver video cuando termine el proyecto
//https://www.youtube.com/watch?v=EdBZQ6IdlYs&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=19&ab_channel=FaztCode ver esto
/////////////////////////////////////////////////////////////////////

usersCtrl.renderSigninFrom = (req, res)=>{
    res.render('users/signin');
}

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/signin",
  });

usersCtrl.logout = (req, res) => {
    req.logout();
    res.redirect("/users/signin");
  };


module.exports = usersCtrl;