const { User } = require("../db.js");

const postUser = async (user) => {
  try {
    if (user.email === 'clinicasystemlab@gmail.com') {
      user.admin = true;
    }
const [newUser, created] = await User.findOrCreate({
  where: {
    id: user.id,
    cedula: user.cedula,
  },
  defaults: {
    firstName: user.firstName,
    lastName: user.lastName,
    image: user.image,
    correo: user.email,
    nombre: user.nombre,
    apellido: user.apellido,
    fechaDeNacimiento: user.fechaDeNacimiento,
    telefono: user.telefono,
    whatsapp: user.whatsapp,
    direccion: user.direccion,
    nacionalidad: user.nacionalidad,
    admin: user.admin,
  },
});

if (created) {
  const nUser = {
    id: newUser.dataValues.id,
    image: newUser.dataValues.image,
    correo: newUser.dataValues.correo,
    nombre: newUser.dataValues.nombre,
    apellido: newUser.dataValues.apellido,
    telefono: newUser.dataValues.telefono,
    whatsapp: newUser.dataValues.whatsapp,
    nacionalidad: newUser.dataValues.nacionalidad,
    admin: newUser.dataValues.admin,
  };
console.log(nUser)
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
    console.log(id)
    const userId = await User.findByPk(id);
    return userId;
  } catch (error) {
    throw new Error("Error no hay resgistros con ese id.");
  }
};


module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getUserByBoolean,
};
