
db.personas.drop()
db.createCollection(
  'personas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'tipoDocumento',
          'documento',
          'ciudad',
          'genero',
          'edad',
          'eps',
          'telefonos'
        ],
        properties: {
          tipoDocumento: {
            bsonType: 'string',
            enum: ["CC", "TI", "CE", "NIP", "NIT"],
            description: 'must be "CC" or "TI" or "CE" or "NIP" or "NIT" and is required'
          },
          documento: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          ciudad: {
            bsonType: 'objectId',
            description: 'must be a string and is required'
          },
          genero: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          edad: {
            bsonType: 'number',
            description: 'must be a number and is required'
          },
          eps: {
            bsonType: 'object',
            required: ["eps", "fechaAfiliacion", "tipo"],
            properties: {
              eps: {
                bsonType: 'objectId',
                description: 'id de la Eps a la que se pertenece'
              },
              fechaAfiliacion: {
                bsonType: 'date',
                description: 'must be a date and is required'
              },
              tipo: {
                enum: ["cotizante", "beneficiario"],
                bsonType: 'string',
                description: 'must be "cotizante" or "beneficiario" and is required'
              }
            }
          },
          telefonos: {
            bsonType: 'array',
            description: 'telefonos must be an array and is required',
            items: {
              bsonType: 'object',
              required: ['descripcion', 'numero'],
              properties: {
                descripcion: {
                  bsonType: 'string',
                  description: 'must be a string and is required'
                },
                numero: {
                  bsonType: 'string',
                  description: 'must be an string and is required',
                }
              }
            }
          }
        }
      }
    }
  }
)

db.llamadas.drop()
db.createCollection(
  'llamadas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'date',
          'persona',
          'numero',
          'acepto',
          'asistira'
        ],
        properties: {
          date: {
            bsonType: 'date',
            description: 'must be a date and is required'
          },
          persona: {
            bsonType: 'objectId',
            description: 'must be a objectId and is required'
          },
          numero: {
            bsonType: 'number',
            description: 'must be a number and is required'
          },
          acepto: {
            bsonType: 'boolean',
            description: 'must be a boolean and is required'
          }
          asistira: {
            bsonType: 'boolean',
            description: 'must be a boolean and is required'
          }
        }
      }
    }
  }
)

db.ciudad.drop()
db.createCollection(
  'ciudad', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
          }
        }
      }
    }
  }
)

db.vacuna.drop()
db.createCollection(
  'vacuna', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
          }
        }
      }
    }
  }
)

db.vacuna.drop()
db.createCollection(
  'vacuna', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
          }
        }
      }
    }
  }
)

db.cita.drop()
db.createCollection(
  'cita', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'identificador',
          'centroVacunacion',
          'persona',
          'fecha'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
          }
          identificador: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          centroVacunacion: {
            bsonType: 'objectId',
            description: 'must be a string and is required'
          },
          persona: {
            bsonType: 'objectId',
            description: 'must be a string and is required'
          },
          fecha: {
            bsonType: 'date',
            description: 'must be a date and is required'
          }
        }
      }
    }
  }
)

db.personas.insert(
  {
    tipoDocumento: "CC",
    documento: "123412123",
    ciudad: ObjectId("609ff0eabda506ca3c35e07c"),
    genero: "genero",
    edad: 23,
    eps: {
      eps: ObjectId("609ff0eabda506ca3c35e07c"),
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "descripcion",
        numero: "numerooo"
      }
    ]
  }
)

db.llamadas.insert(
  {
    date: new Date(),
    persona: db.personas.findOne(
      {
        tipoDocumento: "CC",
        documento:  "123412123"
      },
      {_id: 1}
    )._id,
    numero: 1,
    acepto: false,
    asistira: true
  }
)

cita
{
  identificador: ,
  centroVacunacion:
  persona: objectId
  fecha: date
}



vacunacion
{
  idCita: objectId,
  día y hora de la vacuna,,
  si tuvo reacción en los siguientes quince minutos,
  si fue acompañado o no y por quien.,
  vacuna: objectId
}
