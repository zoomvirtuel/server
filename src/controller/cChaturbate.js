const { Chaturbate } = require("../db.js");

const postChaturbate = async (corteChat) => {
  try {
    const registroChat = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const item of corteChat) {
      const [registros, created] = await Chaturbate.findOrCreate({
        where: {
          userName: item.user,
          tokens: item.tokens,
          dolares: item.dolares,
          mensual: false,
        },
      });
      if (created) {
        registroChat.push(registros);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    registroChat.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return registroChat;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getAllChaturbate = async () => {
  try {
    const corteChat = await Chaturbate.findAll();
    corteChat.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return corteChat;
  } catch (error) {
    throw new Error ('Error al buscar los registros ' + error.message);
  }
};

module.exports = {
  postChaturbate,
  getAllChaturbate,
};
