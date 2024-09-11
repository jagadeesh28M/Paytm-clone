const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jagadeesh28:pass@cluster0.f5bsn.mongodb.net/paytm")
const userSchema = new mongoose.Schema({
    username : String,
    firstname : String,
    lastname : String,
    password : String
})

const User = mongoose.model('User',userSchema);

module.exports = {
    User
};


// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         minLength: 3,
//         maxLength: 30
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// });