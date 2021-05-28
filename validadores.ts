
db.personas.drop()
db.createCollection(
  'personas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'tipoDocumento',
          'nombre',
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
          nombre: {
            bsonType: 'string',
            description: 'must be a string and is required'
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
            enum: ["hombre", "mujer"],
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
            bsonType: 'bool',
            description: 'must be a bool and is required'
          },
          asistira: {
            bsonType: 'bool',
            description: 'must be a bool and is required'
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
          'reacciones',
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
          reacciones: {
            bsonType: 'array',
            description: 'reacciones must be an array and is required',
            items: {
              bsonType: 'string',
              description: 'must be a string and is required'
            }
          },
          acompanhado: {
            bsonType: 'bool',
            description: 'must be a bool and is required'
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
