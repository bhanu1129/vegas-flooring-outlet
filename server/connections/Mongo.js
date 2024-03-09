const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(
      "mongodb+srv://bhanubansal913:gije25fvklnoqWml@contact-data.echbzaj.mongodb.net/?retryWrites=true&w=majority&appName=contact-data"
    )
    .then(() => console.log("Connection successful"))
    .catch((err)=> console.log(err));
};

module.exports = connect;