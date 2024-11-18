const UsersDB = require('../schema/users-schema');
const DataDB =require('../schema/data-schema')
const jwt = require('jsonwebtoken');
const jwtkey=process.env.key;

exports.gethomepage=(req,res)=>
{
    const token = req.query.token;
    const name =req.user.username 
    res.render('home', { token,name:name }); 
}


exports.getSignInPage=(req,res)=>
{
    res.render('signin')
}

exports.postSignin = async (req,res)=>
{
    
    const username=req.body.username;
    const password=req.body.password;
   
    if (!username) {
        return res.status(400).json("please enter your email");
    }
    if (!password) {
        return res.status(400).json("please enter your password");
    }

    const user= await UsersDB.findOne({username:username})
   
    if (!user) {
        return res.redirect('/signin');
    }

    if(user.password===password)
    {
        const token = jwt.sign({username:username,team:user.team}, jwtkey);
        return res.redirect(`/home?token=${token}`);
    }
    else
    {
        res.status(404).json("wrong password")

    }



    
}
exports.getformpage=(req,res)=>
{
    const streetName = req.query.street; 
    const name=req.user.username;
    

    res.render("form", { street: streetName ,name:name});
}


exports.postsubmit= async (req, res) => {
    
    try {
       
        const {
            رقم_العماره,
            رقم_الشقه,
            اسم_الاب,
            عدد_الباغين,
            عدد_الاطفال,
            رقم_الهاتف,
            الدخل,
            الوظيفه,
            ادويه,
            اجراء_طبي,
            حالات_ادمان,
            سبب_الدين1,
            قيمه_الدين1,
            كم_تبقي1,
            معاد_استحقاق_الدين1,
            سبب_الدين2,
            قيمه_الدين2,
            كم_تبقي2,
            معاد_استحقاق_الدين2,
            rate,
            الشارع,
            by
        } = req.body;

        
        const newData = new DataDB({
            رقم_العماره,
            رقم_الشقه,
            اسم_الاب,
            عدد_الباغين,
            عدد_الاطفال,
            رقم_الهاتف,
            الدخل,
            الوظيفه,
            ادويه,
            اجراء_طبي,
            حالات_ادمان,
            سبب_الدين1,
            قيمه_الدين1,
            كم_تبقي1,
            معاد_استحقاق_الدين1,
            سبب_الدين2,
            قيمه_الدين2,
            كم_تبقي2,
            معاد_استحقاق_الدين2,
            rate,
            الشارع,
            by
        });

        
        await newData.save();
        const token = req.query.token
        name2=req.query.name
        
        res.render('form', { token, street: الشارع,name:name2 });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving data');
    }
}

exports.getdata = async (req, res) => {
    
    let cases = await DataDB.find({});
  
    
    cases = cases.sort((a, b) => b.rate - a.rate);
  
    
    //console.log(cases);
  
  
    res.render('cases', { cases });
  };