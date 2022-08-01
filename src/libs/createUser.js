const User = require('../models/User');

const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "cristian@taurus.center" });

  if (userFound) return;

  const newUser = new User({
    name: "admin",
    email: "cristian@taurus.center",
  });

  newUser.password = await newUser.encryptPassword("center1322");

  const admin = await newUser.save();

  console.log("user created", admin);
};
module.exports = createAdminUser;