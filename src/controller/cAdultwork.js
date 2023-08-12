const { Adultwork } = require("../db.js");

const postCorte = async (corte) => {
  try {
    const registroCorte = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const item of corte) {
      const [registros, created] = await Adultwork.findOrCreate({
        where: {
          userName: item.user,
          fecha: item.fecha,
          creditos: item.creditos,
          parcial: item.parcial,
          mensual: false,
        }
        },);
        if (created) {
          registroCorte.push(registros)
        }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    registroCorte.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return registroCorte;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getAllQuincena = async () => {
  try {
    const corte = await Adultwork.findAll({where: {parcial: 'no'}});
    corte.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return corte;
  } catch (error) {
    throw new Error('Error al buscar los registros ' + error.message);
  }
};

const postParcial = async (parcial) => {
  try {
    const registroParcial = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const item of parcial) {
      const [registros, created] = await Adultwork.findOrCreate({
        where: {
          userName: item.user,
          creditos: item.creditos,
          parcial: item.parcial,
          mensual: false,
        }
      },);
      if (created) {
        registroParcial.push(registros)
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    registroParcial.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return registroParcial;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getAllParcial = async () => {
  try {
    const parcial = await Adultwork.findAll({where: {parcial: 'si'}});
    parcial.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return parcial;
  } catch (error) {
    throw new Error('Error al buscar los registros ' + error.message);
  }
};

module.exports = {
  postCorte,
  getAllQuincena,
  postParcial,
  getAllParcial,
};


// const getCountryById = async (id) => {
//   const countryFilterId = await Country.findOne({
//     where: { id },
//     include: {
//       model: Activity,
//       as: "Activities",
//       attributes: ["id", "name", "difficulty", "duration", "season"],
//       through: { attributes: [] },
//     },
//   });
  
//   if (countryFilterId) return countryFilterId;
//   return { error: `No hay paises con el ID: ${id}` };
// };

// const getCountryByName = async (name) => {
//   const countryFilterName = await Country.findAll({
//     where: {
//       name: {
//         [Op.iLike]: `%${name}%`,
//       },
//     },
//   });

//   if (countryFilterName.length >= 0) return countryFilterName;
//   return { error: `No hay paises con el Nombre: ${name}` };
// };

// module.exports = {
//   getAllCountries,
//   getCountryById,
//   getCountryByName,
// };
