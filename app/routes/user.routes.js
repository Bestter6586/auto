module.exports =(app)=>{
    
  const user = require("../controllers/user.controller");

  var router = require("express").Router(); //need to have this line

  // router.post('/CreateUser',user.createUser)

  router.post("/createuser",user.createUsertest);
  router.put("/updateuser/:number",user.updateUsertest);
  router.get("/getalluser",user.getUsertest);
  router.get("/getmyuser/:number",user.getUsertest1);
  router.delete("/deleteuser",user.deleteUsertest);

  app.use("/api/user",router);
}

