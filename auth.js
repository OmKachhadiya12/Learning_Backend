const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

passport.use(new LocalStrategy(async(username,password,done) => {
  try{
    console.log('Recevied data', username,password);
    const user = await Person.findOne({username:username});
    if(!user){
      return done(null,false,{message:'Not found!!!'});
    }

    const isPasswordMatch = user.password === password ? true : false;
    if(isPasswordMatch){
      return done(null,user);
    }else{
      return done(null,false,{message:'Not found!!!'});
    }

  }catch(error){
    return done(err);
  }
}))


module.exports = passport;