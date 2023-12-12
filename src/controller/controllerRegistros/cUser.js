const {
  User,
  Comentario,
  UserName,
  // Adultwork,
  Porcentaje,
  Ubicacion
} = require("../../db.js");

const postUser = async (user) => {
  try {
    if (user.email === "clinicasystemlab@gmail.com") {
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
    return nUser;
  } catch (error) {
    throw new Error("Lo sentimos no se pudo completar.");
  }
};

const getAllUser = async () => {
  try {
    const user = await User.findAll({
      include: [
        {
          model: Comentario,
          as: "comments",
        },
        {
          model: UserName,
          as: "useres",
        },
        {
          model: Porcentaje,
          as: "p_porcentaje",
        },
        {
          model: Ubicacion,
          as: "p_ubicacion",
        },
      ],
    });
    user.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return user;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};
const getAllUserIdName = async () => {
  try {
    const user = await User.findAll({
      attributes: ['id', 'nombre', 'apellido'],
    });
    user.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return user;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getUserById = async (id) => {
  try {
    // console.log(id)
    const userId = await User.findOne({
      where: { id },
      include: [
        {
          model: Comentario,
          as: "comments",
        },
        {
          model: UserName,
          as: "useres",
        },
        {
          model: Porcentaje,
          as: "p_porcentaje",
        },
        {
          model: Ubicacion,
          as: "p_ubicacion",
        },
      ],
    });
    return userId;
  } catch (error) {
    throw new Error("Error no hay resgistros con ese id. " + error.message);
  }
};
const getCheckById = async (id) => {
  try {
    const userId = await User.findByPk(id);
    return userId;
  } catch (error) {
    throw new Error("Error no hay resgistros con ese id. " + error.message);
  }
};

const updateUser = async (id, editUser) => {
  try {
    const nUser = await User.findByPk(id);
    if (!nUser) {
      return { error: "no se encontro el usuario." };
    }
    await User.update( {
      nombre: editUser.nombre,
      apellido: editUser.apellido,
      direccion: editUser.direccion,
      telefono: editUser.telefono,
      whatsapp: editUser.whatsapp,
      admin: editUser.admin,
    },
    { where: { id } });
    const rUser = await User.findByPk(id);
    if (!rUser) {
      throw Error("Usuario no encontrado");
    }
    const rUbicacion = await Ubicacion.findByPk(editUser.ubicacion);
    if (!rUbicacion) {
      throw Error("Ubicacion no encontrada");
    }
    const rPorcentaje = await Porcentaje.findByPk(editUser.porcentaje);
    if (!rPorcentaje) {
      throw Error("Porcentaje no encontrado");
    }

    await rUser.setP_porcentaje(rPorcentaje);
    await rUser.setP_ubicacion(rUbicacion);

    const updateUser = await User.findByPk(id);
    return updateUser;
  } catch (error) {
    throw new Error("Error no pudimos actualizar el usuario.");
  }
};

const deleteUser = async (id) => {
  try {
    const deleteUser = await User.findByPk(id);
    if (!deleteUser) {
      return { error: "Lo sentimos no encontramos el usuario." };
    }
    await deleteUser.destroy();
    return { mensaje: "El usuario fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar el usuario.");
  }
};

module.exports = {
  postUser,
  getAllUser,
  getAllUserIdName,
  getUserById,
  getCheckById,
  updateUser,
  deleteUser,
};
