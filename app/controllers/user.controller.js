const db = require("../models");
var request = require('request-promise');
const user = db.user;

exports.createUser = async (req, res) => {
  const list_data = {    
      agentUsername: "fm",
      key: "m37kwLb5Fy7nIGHoIbb9x",
      username: "fmninemb01",
      name:"tester",
      password: "aa123456",
      web: "fookbet"
  }
  let options = {
    method: 'POST',
    uri: 'https://api.ambexapi.com/api/v1/ext/createUser/64097419F8902BFF8FFCA4DD/fm',
    body: list_data,
    json: true
  };
  await request(options).then( (data) => {
    console.log(data);
    res.send(data);

  })
  .catch(function (err) {
    console.log(err);
    res.send(err);
  });


};

//create
exports.createUsertest = async (req, res) => {
    await user.create(req.body).then((data)=>{
      res.status(200).send();
    }).catch((err)=> {
      res.status(500).send(err);
    })
};

//update and delete mostly use param
//param always add "s"
//update  {PUT at postman}
exports.updateUsertest = async (req, res) => {
  // await user.update({username: req.body.username, password: req.body.password})   if specific
  await user.update(req.body,{where: {id: req.params.number}}).then((data) => {
    res.status(200).send(data);
  }).catch((err)=> {
    res.status(500).send(err);
  })

};


// sequelize has "findAll and findOne"
exports.getUsertest = async (req, res) => {
  
  await user.findAll({
    attributes: ["id","username","name"]
  }).then((data) => {
    res.status(200).send(data);
  }).catch((err)=> {
    res.status(500).send(err);
  })

  //another way
  // try {
  //   const data = await user.findAll();
  //   res.status(200).send(data);
  // } catch (error) {
  //   res.status(500).send(error);
  // }

};

exports.getUsertest1 = async (req, res) => {
  
  await user.findOne({
    attributes: ["id","username","name"]
  },{where: {id: req.params.number}}).then((data) => {
    res.status(200).send(data);
  }).catch((err)=> {
    res.status(500).send(err);
  })

};

exports.deleteUsertest = async (req, res) => {
  
  await user.destroy({where: {id: req.body.id}}).then((data) => {
    res.status(200).send("success deleting");
  }).catch((err)=> {
    res.status(500).send(err);
  })

};