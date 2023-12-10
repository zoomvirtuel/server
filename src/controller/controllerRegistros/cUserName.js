const {
  UserName,
  Paginas,
  User,
} = require("../../db.js");

const postUserName = async (input) => {
  try {
    const { paginas, user, ...userName } = input;

    const newUser = await User.findByPk(user);
    if (!newUser) {
      throw new Error("Usuario no encontrado");
    }
   

    const createdUserNames = [];

    for (const paginaId in userName) {
      // console.log(paginaId);
      if (userName.hasOwnProperty(paginaId)) {
        const paginaName = userName[paginaId];
        // console.log("username " + paginaName);
        const pagina = await Paginas.findOne({ where: { id: paginaId } });
        // console.log("busqueda de pagina");
        // console.log(pagina);

        if (pagina) {
          const newUserName = await UserName.create({ userName: paginaName });
          // console.log("creacion");
          // console.log(newUserName);
          
          await newUserName.setUseres(newUser);
          // console.log("creacion");
          // console.log(newUserName);
          await newUserName.setUserNames(pagina);
        

          newUserName.pagina = pagina.nombrePagina;

          createdUserNames.push(newUserName);
        }
      }
    }

    return createdUserNames;
  } catch (error) {
    throw new Error("Error: No se pudo registrar el userName");
  }
};

const getAllUserName = async () => {
  try {
    const allUserName = await UserName.findAll();
    return allUserName;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

const getUserNameById = async (id) => {
try {
const userName = await UserName.findByPk(id) 
return userName
} catch (error) {
throw new Error ("No se encontro el UserName " + error.message);
}
};

const updateUserName = async (id, editedUserName) => {
  console.log(id)
  console.log(editedUserName)
  try {
    const editUserNames = await UserName.findByPk(id);
    if (!editUserNames) {
      console.log('error')
      return { error: "No se encontro el userName." };
    }
    await UserName.update(
      {
        userName: editedUserName.userName,
      },
      { where: { id } }
    );
    const updateUserName = await UserName.findByPk(id);
    return updateUserName;
  } catch (error) {
    console.log(error)
    throw Error("No pudimos actualizar el userName. " + error.message);
  }
};

const deleteUserName = async (id) => {
  try {
    const deleteUserName = await UserName.findByPk(id);
    if (!deleteUserName) {
      return { error: "Lo sentimos no encontramos el UserName." };
    }
    await deleteUserName.destroy();
    return { mensaje: "El UserName fue eliminado correctamente" };
  } catch (error) {
    throw Error("Error no se pudo eliminar el UserName.");
  }
};

module.exports = {
  postUserName,
  getAllUserName,
  getUserNameById,
  updateUserName,
  deleteUserName

};
