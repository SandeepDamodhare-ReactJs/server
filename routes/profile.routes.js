const express = require("express")
const { createProfile, getProfile, updateProfile, deleteProfile } = require("../controller/profile.controller")

const ProfileRouter = express.Router()

 ProfileRouter.post("/create", createProfile)
 ProfileRouter.get("/", getProfile)
 ProfileRouter.patch("/update/:profileId", updateProfile)
 ProfileRouter.delete("/delete/:profileId", deleteProfile)


module.exports = {
    ProfileRouter
}