const users = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const connect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://assadihamdy:Hamid123@cluster0.8d2zp3j.mongodb.net/Fitness"
        );

        console.log('database connect')

       let admin = await users.findOne({
            role: 'admin',
        });

        if (!admin) {
            let password = 'Hamidassadi'
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);
            let new_user = new users({
                username:"Hamdy@12",
                email: 'hamidhamdy5@gmail.com',
                password: hashed,
               role:"admin"
            });
            const response= await new_user.save();
            console.log(`admin account has been added : ${response.email}`);
        } else {
            console.log(` Admin account already exist \n webmaster email : ${admin.email}`);
        }
    } catch (error) {
        console.log(error)
        console.log("database is not connect");
    }
};


module.exports = connect;