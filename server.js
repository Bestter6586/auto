const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = 
["https://www.dlt-license.com","https://dlt-license.com",];
// "https://react-fontend-5c241.web.app";
// "http://localhost:3000";
// app.use(cors(corsOptions));
app.use(cors({credentials: true, origin: corsOptions}));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));


//static image folder

app.use('/app/images',express.static('./app/images'))
// app.use('/app/images/driving',express.static('./app/images/driving'))

const db = require("./app/models");



db.sequelize.sync();

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');  //แบบนี้คือ ถ้าเพิ่มเข้าไปแล้ว จะรี db ให้
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



