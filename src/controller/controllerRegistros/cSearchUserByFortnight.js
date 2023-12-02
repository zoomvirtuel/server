const {
  Quincena,
  User,
  UserName,
  Moneda,
  Adultwork,
  Amateur,
  Bonga,
  Cam4,
  Chaturbate,
  Dirty,
  IsLive,
  Mondo,
  MyFreeCams,
  Sakura,
  Sender,
  Skype,
  Streamate,
  StreamRay,
  Stripchat,
  TripleSiete,
  Ventas,
  Vx,
  Xlove,
  XloveNueva,
  Porcentaje,
  Ubicacion,
  Paginas,
  Prestamos,
  Producto,
} = require("../../db.js");

const searchUserByFortnight = async (ids, id) => {
  try {
    const quincenas = await Quincena.findAll({
      attributes: ["id", "nombre", "inicia", "final"],
    });
    const paginas = await Paginas.findAll({
      attributes: ["id", "nombrePagina"],
    });
    const moneda = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Moneda,
          as: "monedas",
          attributes: ["id", "descripcion", "dolar", "euro", "libra"],
        },
      ],
    });

    let quincenaAnterior;
    let nombreQuincena;
    if (moneda?.nombre?.endsWith("2")) {
      // Si moneda.nombre termina en "2", busca la quincena con "1" al final.
      quincenaAnterior = quincenas?.find((quincena) => {
        nombreQuincena = quincena?.nombre;
        return nombreQuincena.endsWith("1");
      });
    }

    let quincenaId = quincenaAnterior.id;
    const adultWork = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Adultwork,
          as: "q_adult",
          attributes: [
            "id",
            "creditos",
            "fecha",
            "parcial",
            "userName",
            "userNameId",
          ],
        },
      ],
    });

    const amateur = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Amateur,
          as: "q_amateur",
          attributes: [
            "id",
            "userName",
            "dolares",
            "userNameId",
            "mensual",
            "tokens",
          ],
        },
      ],
    });
    const bonga = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Bonga,
          as: "q_bonga",
          attributes: [
            "id",
            "userName",
            "fecha",
            "dolares",
            "mensual",
            "userNameId",
          ],
        },
      ],
    });
    const cam4 = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Cam4,
          as: "q_cam4",
          attributes: ["id", "userName", "dolares", "mensual", "userNameId"],
        },
      ],
    });
    const chaturbate = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Chaturbate,
          as: "q_chaturbate",
          attributes: [
            "id",
            "userName",
            "dolares",
            "mensual",
            "userNameId",
            "tokens",
          ],
        },
      ],
    });
    const dirty = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Dirty,
          as: "q_dirty",
          attributes: [
            "id",
            "moneda",
            "plata",
            "userName",
            "mensual",

            "userNameId",
          ],
        },
      ],
    });
    const islive = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: IsLive,
          as: "q_isLive",
          attributes: ["id", "codigo", "euros", "mensual", "userNameId"],
        },
      ],
    });
    const sender = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Sender,
          as: "q_sender",
          attributes: [
            "id",
            "userName",
            "fecha",
            "mensual",
            "userNameId",
            "coins",
            "euros",
          ],
        },
      ],
    });
    const senderQuincenaAnterior = await Quincena.findOne({
      where: { id: quincenaId },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Sender,
          as: "q_sender",
          attributes: [
            "id",
            "userName",
            "fecha",
            "mensual",
            "userNameId",
            "coins",
            "euros",
          ],
        },
      ],
    });
    const skype = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Skype,
          as: "q_skype",
          attributes: ["id", "userName", "dolares", "mensual", "userNameId"],
        },
      ],
    });
    const stripchat = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Stripchat,
          as: "q_stripchat",
          attributes: [
            "id",
            "userName",
            "mensual",
            "dolares",
            "tokens",

            "userNameId",
          ],
        },
      ],
    });
    const vx = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Vx,
          as: "q_vx",
          attributes: ["id", "userName", "euros", "mensual", "userNameId"],
        },
      ],
    });
    const xlove = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Xlove,
          as: "q_xlove",
          attributes: ["id", "userName", "euros", "mensual", "userNameId"],
        },
      ],
    });
    const xlovenueva = await Quincena.findOne({
      where: { id: ids },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: XloveNueva,
          as: "q_xloveNueva",
          attributes: [
            "id",
            "userName",
            "euros",
            "fecha",
            "mensual",

            "userNameId",
          ],
        },
      ],
    });
    // const  = await Quincena.findOne({where: {id: id}, include: []})
    // const quincena = await Quincena.findOne({
    //   where: { id: id },
    //   attributes: ["id", "nombre", "inicia", "final"],
    //   include: [],
    // });

    const user = await User.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "apellido"],
      include: [
        {
          model: UserName,
          as: "useres",
          attributes: ["id", "userName", "pagina"],
        },
        {
          model: Porcentaje,
          as: "p_porcentaje",
          attributes: ["id", "nombre", "inicial", "final", "meta"],
        },
        {
          model: Ubicacion,
          as: "p_ubicacion",
          attributes: ["id", "ubicacion"],
        },
      ],
    });
    const userNameMap = {};
    user?.useres?.forEach((usuario) => {
      userNameMap[usuario?.pagina] = usuario?.userName;
    });
    // Luego, crea un nuevo objeto con el formato deseado
    const paginaUserName = paginas?.map((pagina) => ({
      nombrePagina: pagina?.nombrePagina,
      userName: userNameMap[pagina?.id],
    }));
    const filtradoAdultWork = adultWork?.q_adult?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "adultwork" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoAmateur = amateur?.q_amateur?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "amateur" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoBonga = bonga?.q_bonga?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "bonga" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoCam4 = cam4?.q_cam4?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "cam4" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoChatubate = chaturbate?.q_chaturbate?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "chaturbate" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoDirty = dirty?.q_dirty?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "dirty" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoIsLive = islive?.q_isLive?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "islive" &&
          item?.userName === registro?.codigo
      )
    );
    const filtradoSender = sender?.q_sender?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "sender" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoSenderAnterior = senderQuincenaAnterior?.q_sender?.filter(
      (registro) =>
        paginaUserName?.some(
          (item) =>
            item?.nombrePagina.toLowerCase() === "sender" &&
            item?.userName === registro?.userName
        )
    );
    const filtradoSkype = skype?.q_skype?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "skype" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoStripchat = stripchat?.q_stripchat?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "stripchat" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoVx = vx?.q_vx?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "vx" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoXlove = xlove?.q_xlove?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "xlove" &&
          item?.userName === registro?.userName
      )
    );
    const filtradoXloveNueva = xlovenueva?.q_xloveNueva?.filter((registro) =>
      paginaUserName?.some(
        (item) =>
          item?.nombrePagina.toLowerCase() === "xlovenueva" &&
          item?.userName === registro?.userName
      )
    );
    const result = {
      adultwork: filtradoAdultWork,
      amateur: filtradoAmateur[0],
      bonga: filtradoBonga,
      cam4: filtradoCam4[0],
      chaturbate: filtradoChatubate[0],
      dirty: filtradoDirty[0],
      islive: filtradoIsLive[0],
      sender: filtradoSender[0],
      senderAnterior: filtradoSenderAnterior[0],
      skype: filtradoSkype[0],
      stripchat: filtradoStripchat[0],
      vx: filtradoVx[0],
      xlove: filtradoXlove[0],
      xlovenueva: filtradoXloveNueva[0],
      paginaUserName: paginaUserName,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        porcentaje: user.p_porcentaje,
        ubicacion: user.p_ubicacion,
      },
      moneda: moneda,
    };
    return result;
  } catch (error) {
    throw new Error(
      "Error ocurrio algo en el proceso por favor intente nuevamente o contacte con un programing thanks"
    );
  }
};

const searchAllUserByFortnight = async (id) => {
  try {
    console.log(id);
    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio peticiones al base de datos   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const quincenas = await Quincena.findAll({
      attributes: ["id", "nombre", "inicia", "final"],
    });
    const paginas = await Paginas.findAll({
      attributes: ["id", "nombrePagina"],
    });
    const moneda = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Moneda,
          as: "monedas",
          attributes: ["id", "descripcion", "dolar", "euro", "libra"],
        },
      ],
    });
    let quincenaAnterior;
    let nombreQuincena;
    if (moneda?.nombre?.endsWith("2")) {
      // Si moneda.nombre termina en "2", busca la quincena con "1" al final.
      quincenaAnterior = quincenas?.find((quincena) => {
        nombreQuincena = quincena?.nombre;
        return nombreQuincena.endsWith("1");
      });
    }
    let quincenaId = quincenaAnterior?.id || null;
    const adultwork = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Adultwork,
          as: "q_adult",
          attributes: [
            "id",
            "creditos",
            "fecha",
            "parcial",
            "userName",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const amateur = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Amateur,
          as: "q_amateur",
          attributes: [
            "id",
            "userName",
            "dolares",
            "userNameId",
            "mensual",
            "tokens",
            "createdAt",
          ],
        },
      ],
    });
    const bonga = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Bonga,
          as: "q_bonga",
          attributes: [
            "id",
            "userName",
            "fecha",
            "dolares",
            "mensual",
            "userNameId",
          ],
        },
      ],
    });
    const cam4 = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Cam4,
          as: "q_cam4",
          attributes: [
            "id",
            "userName",
            "dolares",
            "mensual",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const chaturbate = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Chaturbate,
          as: "q_chaturbate",
          attributes: [
            "id",
            "userName",
            "dolares",
            "mensual",
            "userNameId",
            "tokens",
            "createdAt",
          ],
        },
      ],
    });
    const dirty = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Dirty,
          as: "q_dirty",
          attributes: [
            "id",
            "moneda",
            "plata",
            "userName",
            "mensual",
            "createdAt",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const islive = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: IsLive,
          as: "q_isLive",
          attributes: [
            "id",
            "codigo",
            "euros",
            "mensual",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const mondo = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Mondo,
          as: "q_mondo",
          attributes: ["id", "euros", "userName", "userNameId", "createdAt"],
        },
      ],
    });
    const myFreeCams = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: MyFreeCams,
          as: "q_myfreecams",
          attributes: [
            "id",
            "tokens",
            "dolares",
            "userName",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const sakura = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Sakura,
          as: "q_sakura",
          attributes: [
            "id",
            "tokens",
            "dolares",
            "userName",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const sender = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Sender,
          as: "q_sender",
          attributes: [
            "id",
            "userName",
            "fecha",
            "mensual",
            "userNameId",
            "coins",
            "euros",
            "createdAt",
          ],
        },
      ],
    });
    const senderQuincenaAnterior =
      (await Quincena.findOne({
        where: { id: quincenaId },
        attributes: ["id", "nombre", "inicia", "final"],
        include: [
          {
            model: Sender,
            as: "q_sender",
            attributes: [
              "id",
              "userName",
              "fecha",
              "mensual",
              "userNameId",
              "coins",
              "euros",
              "createdAt",
            ],
          },
        ],
      })) || [];

    const skype = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Skype,
          as: "q_skype",
          attributes: ["id", "userName", "dolares", "mensual", "userNameId"],
        },
      ],
    });
    const streamate = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Streamate,
          as: "q_streamate",
          attributes: [
            "id",
            "userName",
            "mensual",
            "dolares",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const streamRay = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: StreamRay,
          as: "q_streamRay",
          attributes: [
            "id",
            "userName",
            "mensual",
            "dolares",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const stripchat = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Stripchat,
          as: "q_stripchat",
          attributes: [
            "id",
            "userName",
            "mensual",
            "dolares",
            "tokens",
            "userNameId",
            "createdAt",
          ],
        },
      ],
    });
    const tripleSiete = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: TripleSiete,
          as: "q_triplesiete",
          attributes: ["id", "userName", "dolares", "userNameId", "createdAt"],
        },
      ],
    });
    const vx = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Vx,
          as: "q_vx",
          attributes: ["id", "userName", "euros", "mensual", "userNameId"],
        },
      ],
    });
    const xlove = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Xlove,
          as: "q_xlove",
          attributes: ["id", "userName", "euros", "mensual", "userNameId"],
        },
      ],
    });
    const xlovenueva = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: XloveNueva,
          as: "q_xloveNueva",
          attributes: [
            "id",
            "userName",
            "euros",
            "fecha",
            "mensual",

            "userNameId",
          ],
        },
      ],
    });
    const user = await User.findAll({
      attributes: ["id", "nombre", "apellido"],
      include: [
        {
          model: UserName,
          as: "useres",
          attributes: ["id", "userName", "pagina"],
        },
        {
          model: Porcentaje,
          as: "p_porcentaje",
          attributes: ["id", "nombre", "inicial", "final", "meta"],
        },
        {
          model: Ubicacion,
          as: "p_ubicacion",
          attributes: ["id", "ubicacion"],
        },
      ],
    });
    const prestamos = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Prestamos,
          as: "q_prestamos",
          attributes: ["id", "userId", "cantidad", "createdAt"],
        },
      ],
    });
    const ventas = await Quincena.findOne({
      where: { id: id },
      attributes: ["id", "nombre", "inicia", "final"],
      include: [
        {
          model: Ventas,
          as: "q_venta",
          attributes: [
            "id",
            "userId",
            "cantidad",
            "cuotas",
            "productoId",
            "nombre",
            "valor",
            "createdAt",
          ],
        },
      ],
    });
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin peticiones a la base de datos   ↑↑↑↑↑↑↑↑↑↑↑↑
    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio formateo de usuario   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const formatearUsuarios = (usuarios, paginas) => {
      return usuarios.map((usuario) => {
        // Obtener la información del usuario
        const { id, nombre, apellido, p_porcentaje, p_ubicacion, useres } =
          usuario;

        // Crear un array de userNamePage para el usuario
        const userNamePages = useres.map((userPage) => {
          const { id, userName, pagina } = userPage;
          const paginaInfo = paginas.find(
            (paginaData) => paginaData.id === pagina
          );
          return {
            id: id,
            userName: userName,
            pagina: paginaInfo ? paginaInfo.nombrePagina : null,
            idPage: pagina,
          };
        });

        // Estructurar la información del porcentaje
        const porcentaje = p_porcentaje
          ? {
              id: p_porcentaje.id,
              nombre: p_porcentaje.nombre,
              inicial: p_porcentaje.inicial,
              final: p_porcentaje.final,
              meta: p_porcentaje.meta,
            }
          : null;

        // Estructurar la información de la ubicación
        const ubicacion = p_ubicacion
          ? {
              id: p_ubicacion.id,
              ubicacion: p_ubicacion.ubicacion,
            }
          : null;

        // Crear el objeto de usuario formateado
        const usuarioFormateado = {
          id: id,
          nombre: nombre,
          apellido: apellido,
          porcentaje: porcentaje,
          ubicacion: ubicacion,
          userNamePage: userNamePages,
        };

        return usuarioFormateado;
      });
    };

    const modelos = formatearUsuarios(user, paginas);
    const resultado = {
      modelos: modelos,
      paginas: {},
      moneda: moneda,
      tripleSiete,
    };
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin formateo usuario   ↑↑↑↑↑↑↑↑↑↑↑↑
    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio adultwork   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    const registrosAgrupados = {};

    for (const registro of adultwork?.q_adult) {
      const { userName, userNameId } = registro;

      if (userName) {
        const registroAdultwork = {
          id: registro.id,
          creditos: registro.creditos,
          fecha: registro.fecha,
          parcial: registro.parcial,
          userName: registro.userName,
          userNameId: registro.userNameId,
          createdAt: registro.createdAt,
        };

        if (!registrosAgrupados[userName]) {
          registrosAgrupados[userName] = [registroAdultwork];
        } else {
          registrosAgrupados[userName].push(registroAdultwork);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupados)) {
        const registrosUsuario = registrosAgrupados[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "adultwork" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          // Filtra solo los registros parciales
          const parciales = registrosUsuario.filter(
            (registro) => registro.parcial === true
          );

          // Filtra solo los registros cortes
          const cortes = registrosUsuario.filter(
            (registro) => registro.parcial === false
          );

          // Encuentra el parcial más reciente
          const latestParcialRecord = parciales.reduce((latest, registro) => {
            if (
              !latest ||
              new Date(registro.createdAt) > new Date(latest.createdAt)
            ) {
              return registro;
            }
            return latest;
          }, null);

          // Aplica el descuento del 30% a los créditos del parcial más reciente
          if (latestParcialRecord) {
            latestParcialRecord.creditos *= 0.7;
          }
          // Encuentra el corte más reciente
          const latestCorteRecord = cortes.reduce((latest, registro) => {
            if (
              !latest ||
              new Date(registro.createdAt) > new Date(latest.createdAt)
            ) {
              return registro;
            }
            return latest;
          }, null);

          // Suma todos los créditos de los registros
          // console.log(registrosUsuario)
          const totalCreditos = cortes.reduce(
            (total, registro) => total + registro.creditos,
            0
          );

          // Compara las fechas y decide qué registros incluir
          if (
            latestCorteRecord &&
            new Date(latestCorteRecord.createdAt) >
              new Date(latestParcialRecord.createdAt)
          ) {
            usuario.adultworkTotal = {
              userName: nombreUsuario,
              creditos: totalCreditos,
            };
            usuario.adultwork = cortes;
          } else {
            usuario.adultworkTotal = {
              userName: nombreUsuario,
              creditos: parseFloat(
                (totalCreditos + latestParcialRecord.creditos).toFixed(2)
              ),
            };
            // console.log(latestParcialRecord)
            usuario.adultwork = [...cortes, latestParcialRecord];
          }

          delete registrosAgrupados[nombreUsuario];
        }
      }
    }

    const registrosNoAsignados = Object.values(registrosAgrupados).flat();

    if (registrosNoAsignados.length > 0) {
      resultado.paginas.adultwork = registrosNoAsignados;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin adultwork  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio amateur   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosAmateur = {};

    for (const registro of amateur?.q_amateur) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroAmateur = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
          mensual: registro.mensual,
          tokens: registro.tokens,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosAmateur[userName]) {
          registrosAgrupadosAmateur[userName] = [registroAmateur];
        } else {
          registrosAgrupadosAmateur[userName].push(registroAmateur);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosAmateur)) {
        const registrosUsuario = registrosAgrupadosAmateur[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "amateur" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          // Encontrar el registro más reciente utilizando reduce
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.amateur = registroMasReciente;
          delete registrosAgrupadosAmateur[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosAmateur = Object.values(
      registrosAgrupadosAmateur
    ).flat();

    if (registrosNoAsignadosAmateur.length > 0) {
      resultado.paginas.amateur = registrosNoAsignadosAmateur;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin amateur   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio bonga   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //! a la espera de confirmacion de cortes
    const registrosAgrupadosBonga = {};

    for (const registro of bonga?.q_bonga) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroBonga = {
          id: registro.id,
          userName: registro.userName,
          fecha: registro.fecha,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosBonga[userName]) {
          registrosAgrupadosBonga[userName] = [registroBonga];
        } else {
          registrosAgrupadosBonga[userName].push(registroBonga);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosBonga)) {
        const registrosUsuario = registrosAgrupadosBonga[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "bonga" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const creditosTotales = registrosUsuario.reduce(
            (total, registro) => total + registro.dolares,
            0
          );
          usuario.bongaTotal = {
            userName: nombreUsuario,
            dolares: creditosTotales,
          };
          usuario.bonga = registrosUsuario;
          delete registrosAgrupadosBonga[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosBonga = Object.values(
      registrosAgrupadosBonga
    ).flat();

    if (registrosNoAsignadosBonga.length > 0) {
      resultado.paginas.bonga = registrosNoAsignadosBonga;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin bonga   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio cam4   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosCam4 = {};

    for (const registro of cam4?.q_cam4) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroCam4 = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosCam4[userName]) {
          registrosAgrupadosCam4[userName] = [registroCam4];
        } else {
          registrosAgrupadosCam4[userName].push(registroCam4);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosCam4)) {
        const registrosUsuario = registrosAgrupadosCam4[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "cam4" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.cam4 = registroMasReciente;
          delete registrosAgrupadosCam4[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosCam4 = Object.values(
      registrosAgrupadosCam4
    ).flat();

    if (registrosNoAsignadosCam4.length > 0) {
      resultado.paginas.cam4 = registrosNoAsignadosCam4;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin cam4   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Chaturbate   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosChaturbate = {};

    for (const registro of chaturbate?.q_chaturbate) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroChaturbate = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
          tokens: registro.tokens,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosChaturbate[userName]) {
          registrosAgrupadosChaturbate[userName] = [registroChaturbate];
        } else {
          registrosAgrupadosChaturbate[userName].push(registroChaturbate);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosChaturbate)) {
        const registrosUsuario = registrosAgrupadosChaturbate[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "chaturbate" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );
          usuario.chaturbate = registroMasReciente;
          delete registrosAgrupadosChaturbate[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosChaturbate = Object.values(
      registrosAgrupadosChaturbate
    ).flat();

    if (registrosNoAsignadosChaturbate.length > 0) {
      resultado.paginas.chaturbate = registrosNoAsignadosChaturbate;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin Chaturbate   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Dirty   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosDirty = {};

    for (const registro of dirty?.q_dirty) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroDirty = {
          id: registro.id,
          moneda: registro.moneda,
          plata: registro.plata,
          userName: registro.userName,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosDirty[userName]) {
          registrosAgrupadosDirty[userName] = [registroDirty];
        } else {
          registrosAgrupadosDirty[userName].push(registroDirty);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosDirty)) {
        const registrosUsuario = registrosAgrupadosDirty[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "dirty" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.dirty = registroMasReciente;
          delete registrosAgrupadosDirty[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosDirty = Object.values(
      registrosAgrupadosDirty
    ).flat();

    if (registrosNoAsignadosDirty.length > 0) {
      resultado.paginas.dirty = registrosNoAsignadosDirty;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin Dirty   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Islive   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo ultimo registro subido
    const registrosAgrupadosIsLive = {};

    for (const registro of islive?.q_isLive) {
      const { codigo, userNameId } = registro;
      if (codigo) {
        const registroIslive = {
          id: registro.id,
          userName: registro.codigo,
          euros: registro.euros,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosIsLive[codigo]) {
          registrosAgrupadosIsLive[codigo] = [registroIslive];
        } else {
          registrosAgrupadosIsLive[codigo].push(registroIslive);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosIsLive)) {
        const registrosUsuario = registrosAgrupadosIsLive[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "islive" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.islive = registroMasReciente;
          delete registrosAgrupadosIsLive[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosIslive = Object.values(
      registrosAgrupadosIsLive
    ).flat();

    if (registrosNoAsignadosIslive.length > 0) {
      resultado.paginas.islive = registrosNoAsignadosIslive;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  islive  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  Mondo  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosMondo = {};

    for (const registro of mondo?.q_mondo) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroMondo = {
          id: registro.id,
          euros: registro.euros,
          userName: registro.userName,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosMondo[userName]) {
          registrosAgrupadosMondo[userName] = [registroMondo];
        } else {
          registrosAgrupadosMondo[userName].push(registroMondo);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosMondo)) {
        const registrosUsuario = registrosAgrupadosMondo[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "mondo" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.mondo = registroMasReciente;
          delete registrosAgrupadosMondo[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosMondo = Object.values(
      registrosAgrupadosMondo
    ).flat();

    if (registrosNoAsignadosMondo.length > 0) {
      resultado.paginas.mondo = registrosNoAsignadosMondo;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  Mondo  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio MyFreeCams   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosMyFreeCams = {};

    for (const registro of myFreeCams?.q_myfreecams) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroMyFreeCams = {
          id: registro.id,
          tokens: registro.tokens,
          dolares: registro.dolares,
          userName: registro.userName,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosMyFreeCams[userName]) {
          registrosAgrupadosMyFreeCams[userName] = [registroMyFreeCams];
        } else {
          registrosAgrupadosMyFreeCams[userName].push(registroMyFreeCams);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosMyFreeCams)) {
        const registrosUsuario = registrosAgrupadosMyFreeCams[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "myfreecams" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.myFreeCams = registroMasReciente;
          delete registrosAgrupadosMyFreeCams[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosMyFreeCams = Object.values(
      registrosAgrupadosMyFreeCams
    ).flat();

    if (registrosNoAsignadosMyFreeCams.length > 0) {
      resultado.paginas.myFreeCams = registrosNoAsignadosMyFreeCams;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin MyFreeCams   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Sakura   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //* se arreglo bug de ultimo registro
    const registrosAgrupadosSakura = {};

    for (const registro of sakura?.q_sakura) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroSakura = {
          id: registro.id,
          tokens: registro.tokens,
          dolares: registro.dolares,
          userName: registro.userName,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosSakura[userName]) {
          registrosAgrupadosSakura[userName] = [registroSakura];
        } else {
          registrosAgrupadosSakura[userName].push(registroSakura);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosSakura)) {
        const registrosUsuario = registrosAgrupadosSakura[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "sakura" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.sakura = registroMasReciente;
          delete registrosAgrupadosSakura[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosSakura = Object.values(
      registrosAgrupadosSakura
    ).flat();

    if (registrosNoAsignadosSakura.length > 0) {
      resultado.paginas.sakura = registrosNoAsignadosSakura;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  Sakura  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  sender  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosSender = {};

    for (const registro of sender?.q_sender) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroSender = {
          id: registro.id,
          userName: registro.userName,
          fecha: registro.fecha,
          euros: registro.euros,
          coins: registro.coins,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosSender[userName]) {
          registrosAgrupadosSender[userName] = [registroSender];
        } else {
          registrosAgrupadosSender[userName].push(registroSender);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosSender)) {
        const registrosUsuario = registrosAgrupadosSender[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "sender" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.sender = registrosUsuario[0];
          delete registrosAgrupadosSender[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosSender = Object.values(
      registrosAgrupadosSender
    ).flat();

    if (registrosNoAsignadosSender.length > 0) {
      resultado.paginas.sender = registrosNoAsignadosSender;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  sender  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio sender anterior   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    if (senderQuincenaAnterior?.q_sender) {
      const registrosAgrupadosSenderAnterior = {};

      for (const registro of senderQuincenaAnterior?.q_sender) {
        const { userName, userNameId } = registro;
        if (userName) {
          const registroSenderAnterior = {
            id: registro.id,
            userName: registro.userName,
            fecha: registro.fecha,
            euros: registro.euros,
            coins: registro.coins,
            userNameId: registro.userNameId,
          };

          if (!registrosAgrupadosSenderAnterior[userName]) {
            registrosAgrupadosSenderAnterior[userName] = [
              registroSenderAnterior,
            ];
          } else {
            registrosAgrupadosSenderAnterior[userName].push(
              registroSenderAnterior
            );
          }
        }
      }

      for (const usuarioKey of Object.keys(resultado.modelos)) {
        const usuario = resultado.modelos[usuarioKey];
        for (const nombreUsuario of Object.keys(
          registrosAgrupadosSenderAnterior
        )) {
          const registrosUsuario =
            registrosAgrupadosSenderAnterior[nombreUsuario];
          const usuarioEncontrado = usuario.userNamePage.find(
            (name) =>
              name.pagina.toLowerCase() === "sender" &&
              name.userName === nombreUsuario
          );
          if (usuarioEncontrado) {
            usuario.senderAnterior = registrosUsuario[0];
            delete registrosAgrupadosSenderAnterior[nombreUsuario];
          }
        }
      }

      const registrosNoAsignadosSenderAnterior = Object.values(
        registrosAgrupadosSenderAnterior
      ).flat();

      if (registrosNoAsignadosSenderAnterior.length > 0) {
        resultado.paginas.senderAnterior = registrosNoAsignadosSenderAnterior;
      }
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  sender anterior  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  skype  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosSkype = {};

    for (const registro of skype?.q_skype) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroSkype = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosSkype[userName]) {
          registrosAgrupadosSkype[userName] = [registroSkype];
        } else {
          registrosAgrupadosSkype[userName].push(registroSkype);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosSkype)) {
        const registrosUsuario = registrosAgrupadosSkype[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "skype" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.skype = registrosUsuario[0];
          delete registrosAgrupadosSkype[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosSkype = Object.values(
      registrosAgrupadosSkype
    ).flat();

    if (registrosNoAsignadosSkype.length > 0) {
      resultado.paginas.skype = registrosNoAsignadosSkype;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  skype  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Streamate   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // const registrosAgrupadosSkype = {};

    //         for (const registro of skype?.q_skype) {
    //           const { userName, userNameId } = registro;
    //           if (userName) {
    //             const registroSkype = {
    //               id: registro.id,
    //               userName: registro.userName,
    //               dolares: registro.dolares,
    //               userNameId: registro.userNameId,
    //             };

    //             if (!registrosAgrupadosSkype[userName]) {
    //               registrosAgrupadosSkype[userName] = [registroSkype];
    //             } else {
    //               registrosAgrupadosSkype[userName].push(registroSkype);
    //             }
    //           }
    //         }

    //         for (const usuarioKey of Object.keys(resultado.modelos)) {
    //           const usuario = resultado.modelos[usuarioKey];
    //           for (const nombreUsuario of Object.keys(registrosAgrupadosSkype)) {
    //             const registrosUsuario = registrosAgrupadosSkype[nombreUsuario];
    //             const usuarioEncontrado = usuario.userNamePage.find(
    //               (name) =>
    //                 name.pagina.toLowerCase() === "skype" &&
    //                 name.userName === nombreUsuario
    //             );
    //             if (usuarioEncontrado) {
    //               usuario.skype = registrosUsuario;
    //               delete registrosAgrupadosSkype[nombreUsuario];
    //             }
    //           }
    //         }

    //         const registrosNoAsignadosSkype = Object.values(
    //           registrosAgrupadosSkype
    //         ).flat();

    //         if (registrosNoAsignadosSkype.length > 0) {
    //           resultado.paginas.skype = registrosNoAsignadosSkype;
    //         }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  Streamate  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio StreamRay   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosStreamRay = {};

    for (const registro of streamRay?.q_streamRay) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroStreamRay = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosStreamRay[userName]) {
          registrosAgrupadosStreamRay[userName] = [registroStreamRay];
        } else {
          registrosAgrupadosStreamRay[userName].push(registroStreamRay);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosStreamRay)) {
        const registrosUsuario = registrosAgrupadosStreamRay[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "streamray" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );

          usuario.streamRay = registroMasReciente;
          delete registrosAgrupadosStreamRay[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosStreamRay = Object.values(
      registrosAgrupadosStreamRay
    ).flat();

    if (registrosNoAsignadosStreamRay.length > 0) {
      resultado.paginas.streamRay = registrosNoAsignadosStreamRay;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  StreamRay  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  stripchat  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosStripchat = {};

    for (const registro of stripchat?.q_stripchat) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroStripchat = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          tokens: registro.tokens,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosStripchat[userName]) {
          registrosAgrupadosStripchat[userName] = [registroStripchat];
        } else {
          registrosAgrupadosStripchat[userName].push(registroStripchat);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosStripchat)) {
        const registrosUsuario = registrosAgrupadosStripchat[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "stripchat" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.stripchat = registrosUsuario[0];
          delete registrosAgrupadosStripchat[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosStripchat = Object.values(
      registrosAgrupadosStripchat
    ).flat();

    if (registrosNoAsignadosStripchat.length > 0) {
      resultado.paginas.stripchat = registrosNoAsignadosStripchat;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin stripchat   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  tripleSiete  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosTripleSiete = {};

    for (const registro of tripleSiete?.q_triplesiete) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroTripleSiete = {
          id: registro.id,
          userName: registro.userName,
          dolares: registro.dolares,
          userNameId: registro.userNameId,
          fecha: registro.createdAt,
        };

        if (!registrosAgrupadosTripleSiete[userName]) {
          registrosAgrupadosTripleSiete[userName] = [registroTripleSiete];
        } else {
          registrosAgrupadosTripleSiete[userName].push(registroTripleSiete);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosTripleSiete)) {
        const registrosUsuario = registrosAgrupadosTripleSiete[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "triplesiete" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          const registroMasReciente = registrosUsuario.reduce(
            (prev, current) => {
              return new Date(prev.fecha) > new Date(current.fecha)
                ? prev
                : current;
            }
          );
          usuario.tripleSiete = registroMasReciente;
          delete registrosAgrupadosTripleSiete[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosTripleSiete = Object.values(
      registrosAgrupadosTripleSiete
    ).flat();

    if (registrosNoAsignadosTripleSiete.length > 0) {
      resultado.paginas.tripleSiete = registrosNoAsignadosTripleSiete;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin tripleSiete   ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio  vx   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosVx = {};

    for (const registro of vx?.q_vx) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroVx = {
          id: registro.id,
          userName: registro.userName,
          euros: registro.euros,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosVx[userName]) {
          registrosAgrupadosVx[userName] = [registroVx];
        } else {
          registrosAgrupadosVx[userName].push(registroVx);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosVx)) {
        const registrosUsuario = registrosAgrupadosVx[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "vx" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.vx = registrosUsuario[0];
          delete registrosAgrupadosVx[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosVx = Object.values(registrosAgrupadosVx).flat();

    if (registrosNoAsignadosVx.length > 0) {
      resultado.paginas.vx = registrosNoAsignadosVx;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin  vx  ↑↑↑↑↑↑↑↑↑↑↑↑

    //! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    inicio Xlove    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosXlove = {};

    for (const registro of xlove?.q_xlove) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroXlove = {
          id: registro.id,
          userName: registro.userName,
          euros: registro.euros,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosXlove[userName]) {
          registrosAgrupadosXlove[userName] = [registroXlove];
        } else {
          registrosAgrupadosXlove[userName].push(registroXlove);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosXlove)) {
        const registrosUsuario = registrosAgrupadosXlove[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "xlove" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.xlove = registrosUsuario[0];
          delete registrosAgrupadosXlove[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosXlove = Object.values(
      registrosAgrupadosXlove
    ).flat();

    if (registrosNoAsignadosXlove.length > 0) {
      resultado.paginas.xlove = registrosNoAsignadosXlove;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin Xlove   ↑↑↑↑↑↑↑↑↑↑↑↑

    //!  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓   inicio XloveNueva  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const registrosAgrupadosXloveNueva = {};

    for (const registro of xlovenueva?.q_xloveNueva) {
      const { userName, userNameId } = registro;
      if (userName) {
        const registroXloveNueva = {
          id: registro.id,
          userName: registro.userName,
          euros: registro.euros,
          fecha: registro.fecha,
          userNameId: registro.userNameId,
        };

        if (!registrosAgrupadosXloveNueva[userName]) {
          registrosAgrupadosXloveNueva[userName] = [registroXloveNueva];
        } else {
          registrosAgrupadosXloveNueva[userName].push(registroXloveNueva);
        }
      }
    }

    for (const usuarioKey of Object.keys(resultado.modelos)) {
      const usuario = resultado.modelos[usuarioKey];
      for (const nombreUsuario of Object.keys(registrosAgrupadosXloveNueva)) {
        const registrosUsuario = registrosAgrupadosXloveNueva[nombreUsuario];
        const usuarioEncontrado = usuario.userNamePage.find(
          (name) =>
            name.pagina.toLowerCase() === "xlovenueva" &&
            name.userName === nombreUsuario
        );
        if (usuarioEncontrado) {
          usuario.xlovenueva = registrosUsuario[0];
          delete registrosAgrupadosXloveNueva[nombreUsuario];
        }
      }
    }

    const registrosNoAsignadosXloveNueva = Object.values(
      registrosAgrupadosXloveNueva
    ).flat();

    if (registrosNoAsignadosXloveNueva.length > 0) {
      resultado.paginas.xlovenueva = registrosNoAsignadosXloveNueva;
    }
    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin xloveNueva   ↑↑↑↑↑↑↑↑↑↑↑↑

    //!  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓   inicio prestamos  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    prestamos?.q_prestamos?.forEach((prestamo) => {
      const userModel = resultado.modelos.find(
        (model) => model.id === prestamo.userId
      );
      if (userModel) {
        // Inicializar 'prestamos' si aún no existe
        if (!userModel.prestamos) {
          userModel.prestamos = [];
        }
        userModel.prestamos.push(prestamo);
        userModel.prestamos.sort((a, b) => b.createdAt - a.createdAt);
      }
    });

    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin prestamos   ↑↑↑↑↑↑↑↑↑↑↑↑

    //!  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓   inicio prestamos  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    ventas?.q_venta?.forEach((venta) => {
      const userModel = resultado.modelos.find(
        (model) => model.id === venta.userId
      );

      if (userModel) {
        // Crear la propiedad 'ventas' si aún no existe
        if (!userModel.vitrina) {
          userModel.vitrina = [];
        }

        // Agregar la venta al array 'ventas' del modelo
        userModel.vitrina.push(venta);

        // Ordenar las ventas de manera descendente por fecha
        userModel.vitrina.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
    });

    //!  ↑↑↑↑↑↑↑↑↑↑↑↑   fin prestamos   ↑↑↑↑↑↑↑↑↑↑↑↑
    for (const modelo of resultado.modelos) {
      let totalLibras = parseFloat(modelo.adultworkTotal?.creditos || 0);

      let totalEuros =
        parseFloat((modelo.dirty?.moneda === "euro" ? modelo.dirty?.plata : 0) || 0) +
        parseFloat(modelo.islive?.euros || 0) +
        parseFloat(modelo.mondo?.euros || 0) +
        parseFloat((modelo.senderAnterior?.euros
          ? modelo.sender?.euros - modelo.senderAnterior?.euros
          : 0) || 0) +
        parseFloat(modelo.vx?.euros || 0) +
        parseFloat(modelo.xlove?.euros || 0) +
        parseFloat(modelo.xlovenueva?.euros || 0);

      let totalDolares =
        parseFloat(modelo.amateur?.dolares || 0) +
        parseFloat(modelo.bongaTotal?.dolares || 0) +
        parseFloat(modelo.cam4?.dolares || 0) +
        parseFloat(modelo.chaturbate?.dolares || 0) +
        parseFloat((modelo.dirty?.moneda === "dolar" ? modelo.dirty?.plata : 0) || 0) +
        parseFloat(modelo.myFreeCams?.dolares || 0) +
        parseFloat(modelo.sakura?.dolares || 0) +
        parseFloat(modelo.skype?.dolares || 0) +
        parseFloat(modelo.stripchat?.dolares || 0) +
        parseFloat(modelo.streamRay?.dolares || 0) +
        parseFloat(modelo.tripleSiete?.dolares || 0);
      const totalCreditos = parseFloat(totalDolares + totalEuros + totalLibras || 0);
      const porcentajeFinal =
        totalCreditos >= modelo.porcentaje?.meta
          ? modelo.porcentaje?.final
          : modelo.porcentaje?.inicial;
      const monedaEstadisticas = moneda?.monedas?.find(
        (x) => x.descripcion === "estadisticas"
      );
      const monedaPago = moneda?.monedas?.find((x) => x.descripcion === "pago");
      const monedaSeleccionada = monedaPago || monedaEstadisticas;
      const dolar = monedaSeleccionada?.dolar || 0;
      const euro = monedaSeleccionada?.euro || 0;
      const libra = monedaSeleccionada?.libra || 0;
      const totalPesos =
        parseFloat((((totalLibras * porcentajeFinal) / 100) * libra) || 0 )+
          parseFloat((((totalEuros * porcentajeFinal) / 100) * euro) || 0 )+
          parseFloat((((totalDolares * porcentajeFinal) / 100) * dolar )|| 0);
      const totalPrestamos =
        parseFloat(modelo?.prestamos?.reduce((x, y) => x + y.cantidad, 0) || 0);
      const totalVitrina =
        parseFloat(
          (modelo?.vitrina?.reduce((x, y) => x + y.valor, 0).toFixed(2)
        ) || 0);
      const saldo = parseFloat(
        parseFloat(totalPesos - totalPrestamos - totalVitrina).toFixed(2)
      );

      // Guardar los totales en el modelo
      modelo.totales = {
        totalCreditos,
        totalDolares,
        totalEuros,
        totalLibras,
        totalPrestamos,
        totalVitrina,
        porcentajeFinal,
        totalPesos,
        saldo,
        libra,
        euro,
        dolar,
      };
    }

    //todo  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓   final  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // console.log(resultado)
    return resultado;
  } catch (error) {
    throw new Error(
      "Error ocurrio algo en el proceso por favor intente nuevamente o contacte con un programing thanks" +
        error.message
    );
  }
};

module.exports = {
  searchUserByFortnight,
  searchAllUserByFortnight,
};
