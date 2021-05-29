
// punto 1
db.vacunaciones.aggregate(
  [
    {$match: {}},
    {
      $lookup: {
        from: "llamadas",
        localField: "idLlamada",
        foreignField: "_id",
        as: "llamada"
      }
    },
    {
      $lookup: {
        from: "personas",
        localField: "llamada.persona",
        foreignField: "_id",
        as: "persona"
      }
    },
    {
      $lookup: {
        from: "vacunas",
        localField: "vacuna",
        foreignField: "_id",
        as: "vacuna"
      }
    },
    {$group: {
      _id: {
        nombre: "$vacuna.nombre",
      },
      Cantidad: {$sum: 1},
      Hombres: {$sum:
                {$cond: {if: {$in: ["hombre", "$persona.genero"]},
                         then: 1,
                         else: 0
                        }
                }},
      Mujeres: {$sum:
                {$cond: {if: {$in: ["mujer", "$persona.genero"]},
                         then: 1,
                         else: 0
                        }
                }}
    }}
  ]).pretty()

// punto 2
db.vacunaciones.find().forEach( (elem) => {
  var idVacuna = elem.vacuna;
  var nombre_vacuna = db.vacunas.findOne({_id: idVacuna},{_id:0,nombre:1});

  var id_llamada = elem.idLlamada;
  var id_persona = db.llamadas.findOne(
    {_id: id_llamada},
    {_id:0,persona:1, "cita.centroVacunacion":1}
  );
  var id_centroVacunacion = id_persona.cita.centroVacunacion;
  var centroVacunacion = db.centrosVacunacion.findOne(
    {_id: id_centroVacunacion},
    {_id:0,nombre:1}
  );

  var datos_persona = db.personas.findOne(
    {_id: id_persona.persona},
    {_id:0,nombre: 1, documento: 1, edad:1}
  );

  var fecha = elem.fecha;

  var id_ciudad = db.personas.findOne(
    {_id: id_persona.persona},
    {_id:0, ciudad:1}
  );
  var ciudad = db.ciudad.findOne(
    {_id: id_ciudad.ciudad},
    {_id:0, nombre:1}
  );

  var reacciones_vacuna = db.vacunaciones.findOne({idLlamada: id_llamada}).reacciones;

  if (reacciones_vacuna.length == 0) {
    reacciones_vacuna = "ninguna";
  }

  printjson(
    {
      vacuna: nombre_vacuna.nombre,
      nombre: datos_persona.nombre,
      documento: datos_persona.documento,
      edad: datos_persona.edad,
      fecha_de_vacunacion: fecha,
      ciudad: ciudad.nombre,
      centro_vacunacion: centroVacunacion.nombre,
      reacciones: reacciones_vacuna
    }
  )
})

// punto 4
db.vacunaciones.aggregate(
  [
    {$match: {}},
    {
      $lookup: {
        from: "llamadas",
        localField: "idLlamada",
        foreignField: "_id",
        as: "llamada"
      }
    },
    {
      $lookup: {
        from: "centrosVacunacion",
        localField: "llamada.cita.centroVacunacion",
        foreignField: "_id",
        as: "centroVacunacion"
      }
    },
    {
        $lookup:{
            from: "personas",
            localField: "llamada.persona",
            foreignField: "_id",
            as: "persona"
        }
    },
    {
        $lookup: {
            from:"ciudad",
            localField: "persona.ciudad",
            foreignField: "_id",
            as: "city"
        }
    },
    {$group: {
      _id: {
            nombre: "$centroVacunacion.nombre",
            ciudad:  "$city.nombre"
      },
      maximo: {$max: "$fecha"},
      minimo: {$min: "$fecha"},
      cantidad: {$sum: 1},
      cotizantes: {$sum: {$cond: {if: {$in: ["cotizante", "$persona.eps.tipo"]},
                         then: 1,
                         else: 0
                        }
                }},
      beneficiarios: {$sum: {$cond: {if: {$in: ["beneficiario", "$persona.eps.tipo"]},
                         then: 1,
                         else: 0
                        }
                }}
    }}
  ]).pretty()

// 3rd
db.personas.aggregate(
  [
    {$match: {}},
    {
      $lookup: {
        from: "llamadas",
        localField: "_id",
        foreignField: "persona",
        as: "llamadas"
      }
    }
  ]).forEach((usuario) => {
    usuario.llamadas.forEach((llamada) => {

      var numllamadas = db.vacunaciones.find({idLlamada: "$llamada.id"}).count();
      var ciudad = db.ciudad.findOne({_id: usuario.ciudad},{_id:0, nombre:1});
      if(numllamadas>0)var llamadas= "SI"
      else var llamadas ="NO";
      if(llamada.acepto)var asist = "SI";
      else var asist = "NO";

      printjson({
        nombre: usuario.nombre,
        edad:	usuario.edad,
        llamado: llamadas,
        confirmo_asistencia:asist,
        ciudad:	ciudad.nombre

      });

      if(db.vacunaciones.find({idLlamada: "$llamada.id"}).count() !== 0) {
        printjson(usuario);
      }
    })
  })
