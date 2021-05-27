
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
          },
          cita: {
            bsonType: 'object',
            required: [
              'centroVacunacion',
              'fecha'
            ],
            properties: {
              centroVacunacion: {
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
    }
  }
)

db.centrosVacunacion.drop()
db.createCollection(
  'centrosVacunacion', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'nombre',
          'ciudad'
        ],
        properties: {
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          ciudad: {
            bsonType: 'objectId',
            description: 'must be an objectId and is required'
          }
        }
      }
    }
  }
)

db.vacunaciones.drop()
db.createCollection(
  'vacunaciones', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'idLlamada',
          'fecha',
          'reaccion',
          'acompanhado',
          'vacuna'
        ],
        properties: {
          idLlamada: {
            bsonType: 'objectId',
            description: 'must be a objectId and is required'
          },
          fecha: {
            bsonType: 'date',
            description: 'must be a date and is required'
          },
          reaccion: {
            bsonType: 'boolean',
            description: 'must be a boolean and is required'
          },
          acompanhado: {
            bsonType: 'boolean',
            description: 'must be a boolean and is required'
          },
          vacuna: {
            bsonType: 'objectId',
            description: 'must be a objectId and is required'
          }
        }
      }
    }
  }
)

db.eps.drop()
db.createCollection(
  'eps', {
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

db.vacunas.drop()
db.createCollection(
  'vacunas', {
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

db.vacunas.insert(
  {
    nombre: "astraZeneca"
  }
)

db.ciudad.insert(
  {
    nombre: "bogota"
  }
)

db.eps.insert(
  {
    nombre: "sanitas"
  }
)

db.centrosVacunacion.insert(
  {
    nombre: "Movistar arena",
    ciudad: db.ciudad.findOne(
      {
        nombre: "bogota",
      },
      {_id: 1}
    )._id
  }
)

db.personas.insert(
  {
    tipoDocumento: "CC",
    documento: "123412123",
    ciudad: db.ciudad.findOne(
      {
        nombre: "bogota",
      },
      {_id: 1}
    )._id,
    genero: "genero",
    edad: 23,
    eps: {
      eps: db.ciudad.findOne(
      {
        nombre: "bogota",
      },
      {_id: 1}
    )._id,
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

var fecha = new Date()

var usr = db.personas.findOne(
  {
    tipoDocumento: "CC",
    documento:  "123412123"
  },
  {_id: 1}
)._id

db.llamadas.insert(
  {
    date: fecha,
    persona: usr,
    numero: 1,
    acepto: false,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Movistar arena"
        },
        {_id: 1}
      )._id,
      fecha: new Date()
    }
  }
)

db.vacunaciones.insert(
  {
    idLlamada: db.llamadas.find(
      {
        date: fecha,
        persona: usr
      }
    ),
    fecha: new Date(),
    reaccion: false,
    acompanhado: true,
    vacuna:
      db.vacunas.findOne(
        {
          nombre: "astraZeneca"
        },
        {_id: 1}
      )._id
  }
)
