// models/UserProfile.js
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  selectedHeight: { type: Number, required: true },
  selectedWeight: { type: Number, required: true },
  selectedGender: { type: String, required: true },
  // Add other fields as needed
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
