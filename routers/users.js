const express = require("express");
const router = express.Router();
const User = require("../modules/user");

//create a new user
router.post("/create",async(req,res)=>{
  try{
    const user = await new User(req.body)
    user.save()
    res.send(user)
  } catch(err){
    console.log(err)
  }
});

//get my user by query param
router.get("/:id", async(req,res)=>{
  try{
    const myUser = await User.findById(req.params.id);
    res.send(myUser)
  } catch(err){
    console.log(err)
  }
});

//get all users from database
router.get("/", async(req,res)=>{
  try{
  const users = await User.find();
  res.send(users)
  } catch(err){
    console.log(err)
  }
});

//update my user by getting the data in query params
router.put("/:id", async(req,res)=>{
  try{
     const updateMyUser = await User.findByIdAndUpdate(req.params.id);
     updateMyUser.firstName = req.body.firstName,
     updateMyUser.lastName = req.body.lastName,
     updateMyUser.age = req.body.age,
     updateMyUser.gender = req.body.gender,
     updateMyUser.tandcs = req.body.tandcs,
     updateMyUser.email = req.body.email
  
     updateMyUser.save(req.body);
     res.send(updateMyUser);
  } catch(err){
    console.log(err)
  }
});

//delete my user
router.delete("/:id", async(req,res)=>{
  try{
    const deleteMyUser = await User.findOneAndDelete(req.params.id);
      deleteMyUser.save()
    res.send("user deleted");
  } catch(err){
    console.log( "shiraz is stupid",err)
  }
});

module.exports = router;