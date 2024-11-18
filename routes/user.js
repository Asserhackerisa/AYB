const router=require('express').Router();
const verify=require("../middleware/authorization");
const userController=require('../controllers/users');


router.get('/',userController.getSignInPage);
router.get('/signin',userController.getSignInPage);
router.post('/signin',userController.postSignin);
router.get('/home',verify,userController.gethomepage);
router.get('/form',verify,userController.getformpage);
router.post('/submit',userController.postsubmit)
router.get('/get_data',verify,userController.getdata)
module.exports=router;