const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://sculpz-admin:Sculpz@mo113@cluster0.enhhj.gcp.mongodb.net/Testing?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected'))
    .catch(err => console.log('Caught', err.stack));;

module.exports = mongoose;
