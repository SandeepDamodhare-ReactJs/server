const { ProfileModel } = require("../model/profile.model");

 const createProfile = async(req,res) => {

try {
   const profileData = new ProfileModel(req.body)

   await profileData.save()
    res.status(200).json({msg:"profile created successfully", profileData})

} catch (error) {
    console.log(error.mesaage);
}
// logic
 }

 const getProfile = async(req,res) => {
     try {
        const profileData = await ProfileModel.find()
        res.send(profileData)
     } catch (error) {
        console.log(error.mesaage);
     }
     

 }
 const updateProfile = async(req,res) => {
    const {profileId} = req.params
    console.log(profileId);
try {
    await ProfileModel.findByIdAndUpdate({_id:profileId}, req.body)
  res.status(200).json({msg:"profile data updated"})
    
} catch (error) {
    console.log(error);  
}
 }
 const deleteProfile = async(req,res) => {
    const {profileId} = req.params
try {
    
     await ProfileModel.findByIdAndDelete({_id:profileId})
     res.status(200).json({msg:"profile data deleted"})
} catch (error) {
    console.log(error);   
}
 }

 module.exports = {
    createProfile,getProfile,updateProfile,deleteProfile
 }