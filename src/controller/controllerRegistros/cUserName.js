const {
  UserName,
  Paginas,
  User,
  Adultwork,
  Amateur,
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

module.exports = {
  postUserName,
  getAllUserName,
};
