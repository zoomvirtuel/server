const { User } = require("../db.js");

const postUser = async (user, account) => {
  try {
const [newUser, created] = await User.findOrCreate({
  where: {
    id: account.sub,
    cedula: user.cedula,
  },
  defaults: {
    name: account.name,
    picture: account.picture,
    correo: account.email,
    nombre: user.nombre,
    apellido: user.apellido,
    fechaDeNacimiento: user.fechaDeNacimiento,
    telefono: user.telefono,
    whatsapp: user.whatsapp,
    direccion: user.direccion,
    nacionalidad: user.nacionalidad,
  },
});

if (created) {
  const nUser = {
    id: newUser.dataValues.id,
    name: newUser.dataValues.name,
    picture: newUser.dataValues.picture,
    correo: newUser.dataValues.correo,
    nombre: newUser.dataValues.nombre,
    apellido: newUser.dataValues.apellido,
    telefono: newUser.dataValues.telefono,
    whatsapp: newUser.dataValues.whatsapp,
    nacionalidad: newUser.dataValues.nacionalidad,
  };
// console.log(nUser)
  return nUser;
} else {
  return user;
}
  } catch (error) {
    throw new Error("Lo sentimos no se pudo completar.");
  }
};

const getAllUser = async () => {
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
    return userId;
  } catch (error) {
    throw new Error("Error no hay resgistros con ese id.");
  }
};
const getUserByBoolean = async (id) => {
  try {
    let userId = await User.findByPk(id);
    // console.log(userId)
    if (userId) {
      return userId = true;
    } else {
      return userId = false;
    }
  } catch (error) {
    throw Error ('error no se pudo completar la accion');
  }
};

module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getUserByBoolean,
};
