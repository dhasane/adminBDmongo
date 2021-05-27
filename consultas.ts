
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
    {$group: {
      _id: {
        nombre: "$centroVacunacion.nombre",
        llamada: "$vacunacion"
      },
      cantidad: {$sum: 1}
    }}
  ]).pretty()
