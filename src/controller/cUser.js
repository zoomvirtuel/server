const { User } = require("../db.js");

const postUser = async (account) => {
  // console.log(account);
  try {
    const newUser = await User.findOrCreate({
      where: {
        id: account.sub,
        name: account.name,
        picture: account.picture,
        correo: account.email,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Lo sentimos no se pudo completar.");
  }
};

const getUser = async () => {
  try {
    const user = await User.findAll();
    // x.sort((a, b) => a.userName.localeCompare(b.userName));
    return user;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getUserById = async (id) => {
  try {
    const userId = await User.findByPk(id);
    // x.sort((a, b) => a.userName.localeCompare(b.userName));
    return userId;
  } catch (error) {
    throw new Error("Error no hay resgistros con ese id.");
  }
};

module.exports = {
  postUser,
  getUser,
  getUserById,
};
