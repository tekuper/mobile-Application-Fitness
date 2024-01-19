const express = require("express");//importation du framework express)
const cors =require("cors")//bloquer les liens indesirables (attaques de navigateur)
const app = express();
const generator = require('generate-password');
const bodyParser = require("body-parser")//formatage json
const user=require("./models/user")
const form=require("./models/form")
const jwt = require("jsonwebtoken")
const database=require("./db")
const bcrypt = require("bcryptjs")
const secretOrkey="mlzdhfljdhfkdjhfrud1223"
const nodemailer=require("nodemailer")
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
database()
app.post("/signin", async (req, res) => {
    let exist = await user.findOne({
        email: req.body.email
    })
    console.log(exist);
    try {
        if (!exist) {
            return res.status(400).json({
                message: {
                    error: "Email  is incorrect",
                },
            });
        }

        const validPass = await bcrypt.compare(req.body.password, exist.password);
        console.log(validPass);
        if (!validPass) {
            return res.status(400).json({
                message: {
                    error: " Password is incorrect",
                },
            });
        }
        const payload = {
            _id: exist._id,
            type: exist.role
        };

        const token = await jwt.sign(payload, secretOrkey);

        delete exist.password;
        exist.token = token;
        res.status(200).json({
            user: exist,
            token:token
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false,
            error
        })
    }


})

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "assadihamdy@gmail.com",
        pass: "dian smon mexq qpwx",
    },
    tls: {
        rejectUnauthorized: false,
    },
});

app.post("/form/:id", async (req, res) => {
    try {
      const newForm = new form({
        selectedHeight: req.body.selectedHeight,
        selectedWeight: req.body.selectedWeight,
        selectedGender: req.body.selectedGender,
        weightGoal: req.body.weightGoal,
        selectedPeriod: req.body.selectedPeriod,
        selectedAllergies: req.body.selectedAllergies,
        reminderPreference: req.body.reminderPreference,
      });
  
      const response = await newForm.save();
  
      await user.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          $addToSet: { formulaire: response._id },
        },
        {
          new: true,
        }
      );
  
      res.status(200).json("form saved successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json("form failed");
    }
  });
  
app.post("/singup",async(req,res)=>{
    try {
        const {username,
            email,
            password}=req.body;
            const existe_user=await user.findOne({
                email:email
            })
            if(existe_user){
                return res.status(401).json("useralreadyexiste")
            }
            else{
                let salt = await bcrypt.genSalt(10);
                let passcrypter = await bcrypt.hash(password, salt);
                const new_user=new user({
                    email:email,
                    username:username,
                    password:passcrypter,
                    role:"user",
                })

                const response=await new_user.save()
                res.status(200).json({res:response,message:"useradd with succes"})
            }
    } catch (error) {
        console.log(error);
        res.status(400).json("error d'ajouter le user ")
    }
})

app.post("/addcoach", async (req, res) => {
    const user_exist = await user.findOne({
        email: req.body.email
    });
    const passwords = await generator.generate({
        length: 10,
        numbers: true
    });

    try {
        if (user_exist) {
            return res.status(401).json("User already exists");
        }else{

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(passwords, salt);

        const new_user = new user({
            email: req.body.email,
            password: hashed,
            role: "coach"
        });


        transporter.sendMail({
            from: "hamdi assadi",
            to: new_user.email,
            subject: "Create compte coach",
            html: `good morning dear coach   Please use the following information to log in: Email: ${req.body.email}, Password: ${passwords}`
        }, (err, info) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: {
                        error: err
                    }
                });
            }
            console.log(info);
        });

        const saved_user = await new_user.save();
        res.status(200).send(saved_user);
    }
    } catch (error) {
        console.log(error);
        res.status(400).json("error")
    }
});

app.listen(3000, () => { console.log("listen at 3000!"); }); 