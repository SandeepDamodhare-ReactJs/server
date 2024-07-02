const mongoose = require("mongoose")

// schhema
const profileSchema = mongoose.Schema({
 name:{type:String, required:true},
 number:{type:Number, required:true},
 age:{type:Number, required:true},
 address:{type:String, required:true}
},{
    versionKey:false
})

const ProfileModel = mongoose.model("profile", profileSchema)

module.exports = {
    ProfileModel
}

// model