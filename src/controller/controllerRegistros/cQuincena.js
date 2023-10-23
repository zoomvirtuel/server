const {
  Quincena,
  Moneda,
  Adultwork,
  Amateur,
  Bonga,
  Cam4,
  Chaturbate,
  Dirty,
  IsLive,
  Sender,
  Skype,
  Stripchat,
  Vx,
  Xlove,
  XloveNueva,
} = require("../../db.js");

const postQuincena = async ({ nombreQuincena, fechaDeInicio, fechaFinal }) => {
  try {
    const nQuincena = await Quincena.findOrCreate({
      where: {
        nombre: nombreQuincena,
        inicia: fechaDeInicio,
        final: fechaFinal,
      },
    });
    return nQuincena;
  } catch (error) {
    throw new Error("Lo sentimos no pudimos crear la quincena");
  }
};

const getAllQuincena = async () => {
  try {
    const allQuincena = await Quincena.findAll();
    allQuincena.sort((a, b) => {
      // Convierte las fechas a un formato numérico para comparar
      const dateA = Date.parse(
        a.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
      );
      const dateB = Date.parse(
        b.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
      );

      return dateA - dateB;
    });
    return allQuincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

// const getQuincenaById = async (id) => {
//   try {
//     const quincena = await Quincena.findOne({
//       where: { id },
//       include: [
//         {
//           model: Moneda,
//           as: "monedas",
//         },
//         // {
//         //   model: Adultwork,
//         //   as: "q_adult",
//         // },
//         // {
//         //   model: Amateur,
//         //   as: "q_amateur",
//         // },
//         // {
//         //   model: Bonga,
//         //   as: "q_bonga",
//         // },
//         // {
//         //   model: Cam4,
//         //   as: "q_cam4",
//         // },
//         // {
//         //   model: Chaturbate,
//         //   as: "q_chaturbate",
//         // },
//         // {
//         //   model: Dirty,
//         //   as: "q_dirty",
//         // },
//         // {
//         //   model: IsLive,
//         //   as: "q_isLive",
//         // },
//         {
//           model: Sender,
//           as: "q_sender",
//         },
//         {
//           model: Skype,
//           as: "q_skype",
//         },
//         {
//           model: Stripchat,
//           as: "q_stripchat",
//         },
//         {
//           model: Vx,
//           as: "q_vx",
//         },
//         // {
//         //   model: Xlove,
//         //   as: "q_xlove",
//         // },
//         // {
//         //   model: XloveNueva,
//         //   as: "q_xloveNueva",
//         // },
//       ],
//     });
//     return quincena;
//   } catch (error) {
//     throw new Error("Error no hay resgistros para mostrar.");
//   }
// };
const getQuincenaMoneda = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Moneda,
          as: "monedas",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaAdult = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Adultwork,
          as: "q_adult",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaAmateur = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Amateur,
          as: "q_amateur",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaBonga = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Bonga,
          as: "q_bonga",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaCam4 = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Cam4,
          as: "q_cam4",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaChaturbate = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Chaturbate,
          as: "q_chaturbate",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaDirty = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Dirty,
          as: "q_dirty",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaIsLive = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: IsLive,
          as: "q_isLive",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaSender = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Sender,
          as: "q_sender",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaSkype = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Skype,
          as: "q_skype",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaStripchat = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Stripchat,
          as: "q_stripchat",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaVx = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Vx,
          as: "q_vx",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaXlove = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: Xlove,
          as: "q_xlove",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};
const getQuincenaXloveNueva = async (id) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id },
      include: [
        {
          model: XloveNueva,
          as: "q_xloveNueva",
        },
      ],
    });
    return quincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar.");
  }
};

const updateQuincena = async (id, nQuincena) => {
  try {
    const editQuincena = await Quincena.findByPk(id);
    if (!editQuincena) {
      return { error: "no se encontro la quincena" };
    }
    await Quincena.update(nQuincena);
    const updateQuincena = await Quincena.findByPk(id);
    return updateQuincena;
  } catch (error) {
    throw new Error("No pudimos actualizar la quincena");
  }
};

const deleteQuincena = async (id) => {
  try {
    const deleteQuincena = await Quincena.findByPk(id);
    if (!deleteQuincena) {
      return { error: "Lo sentimos no encontramos la quincena." };
    }
    await deleteQuincena.destroy();
    return { mensaje: "La quincena fue eliminada correctamente" };
  } catch (error) {
    throw new Error("Error no se pudo eliminar la quincena");
  }
};

module.exports = {
  postQuincena,
  getAllQuincena,
  updateQuincena,
  deleteQuincena,
  getQuincenaMoneda,
  getQuincenaAdult,
  getQuincenaAmateur,
  getQuincenaBonga,
  getQuincenaCam4,
  getQuincenaChaturbate,
  getQuincenaDirty,
  getQuincenaIsLive,
  getQuincenaSender,
  getQuincenaSkype,
  getQuincenaStripchat,
  getQuincenaVx,
  getQuincenaXlove,
  getQuincenaXloveNueva,
};
