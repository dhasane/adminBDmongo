
db.ciudad.insertMany(
  [
    {nombre: "Bogota"},
    {nombre: "Bucaramanga"},
    {nombre: "Cali"},
    {nombre: "Armenia"},
    {nombre: "Medellin"},
    {nombre: "Duitama"},
    {nombre: "Santander"}
  ]
)

db.vacunas.insertMany(
  [
    {nombre: "AstraZeneca"},
    {nombre: "Poliomielitis"},
    {nombre: "Influenza"},
    {nombre: "Neumocócica"},
    {nombre: "Rotavirus"},
    {nombre: "Tétanos"}
  ]
)

db.eps.insertMany(
  [
    {nombre: "Cafesalud"},
    {nombre: "Sanitas"},
    {nombre: "Compensar"},
    {nombre: "Coomeva"},
    {nombre: "Unimeq"},
    {nombre: "Famisanar"}
  ]
)

db.centrosVacunacion.insertMany(
  [
    {
      nombre: "Movistar Arena",
      ciudad: db.ciudad.findOne({nombre: "Bogota"})._id
    },
    {
      nombre: "Parqueadero PUJ",
      ciudad: db.ciudad.findOne({nombre: "Bogota"})._id
    },
    {
      nombre: "Hospital Universitario de Santander",
      ciudad: db.ciudad.findOne({nombre: "Bucaramanga"})._id
    },
    {
      nombre: "Hospital San Juan de Dios",
      ciudad: db.ciudad.findOne({nombre: "Armenia"})._id
    },
    {
      nombre: "Hospital General de Medellin",
      ciudad: db.ciudad.findOne({nombre: "Medellin"})._id
    },
    {
      nombre: "Hospital Tundama",
      ciudad: db.ciudad.findOne({nombre: "Duitama"})._id
    },
    {
      nombre: "HUV",
      ciudad: db.ciudad.findOne({nombre: "Cali"})._id
    }
  ]
)

db.personas.insertOne(
  {
    tipoDocumento: "CC",
    nombre: "Ariel",
    documento: "100032290",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bogota",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 18,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Cafesalud",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3153122403"
      },
      {
        descripcion: "telefono fijo",
        numero: "7583348"
      },
      {
        descripcion: "numero contacto",
        numero: "3123207834"
      }
    ]
  }
)

db.personas.insert(
  {
    tipoDocumento: "CC",
    nombre: "cualquier nombre",
    documento: "1234123452343",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bogota",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 23,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Compensar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "descripcion",
        numero: "numesdfasdfarooo"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "CC",
    nombre: "Albin Yakitory",
    documento: "123412123",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bogota",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 23,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Sanitas",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3168670976"
      },
      {
        descripcion: "telefono fijo",
        numero: "7337890"
      },
      {
        descripcion: "numero contacto",
        numero: "3134145670"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "TI",
    nombre: "Martin",
    documento: "1191161400",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Medellin",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 10,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Cafesalud",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "300224830924"
      },
      {
        descripcion: "telefono fijo",
        numero: "7485358"
      },
      {
        descripcion: "numero contacto",
        numero: "3002891423"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "NIT",
    nombre: "Camilo",
    documento: "41911614",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Cali",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 27,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Unimeq",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3163122315"
      },
      {
        descripcion: "telefono fijo",
        numero: "7283456"
      },
      {
        descripcion: "numero contacto",
        numero: "3145768906"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "CC",
    nombre: "Jazmin",
    documento: "7223401",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bogota",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 32,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Compensar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3167098645"
      },
      {
        descripcion: "telefono fijo",
        numero: "7324908"
      },
      {
        descripcion: "numero contacto",
        numero: "3173178868"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "CE",
    nombre: "Tiana",
    documento: " 809746593",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Duitama",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 45,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Coomeva",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3124142683"
      },
      {
        descripcion: "telefono fijo",
        numero: "7317645"
      },
      {
        descripcion: "numero contacto",
        numero: "3045679052"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "TI",
    nombre: "Omar",
    documento: "104383528",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Duitama",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 10,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Coomeva",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3124142683"
      },
      {
        descripcion: "telefono fijo",
        numero: "7317645"
      },
      {
        descripcion: "numero contacto",
        numero: "3045679052"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "NIP",
    nombre: "Daniel",
    documento: "635271894",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Armenia",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 100,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Famisanar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3218453632"
      },
      {
        descripcion: "telefono fijo",
        numero: "7245678"
      },
      {
        descripcion: "numero contacto",
        numero: "3143121523"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "TI",
    nombre: "Diana",
    documento: "1001823479",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bucaramanga",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 10,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Coomeva",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3124142683"
      },
      {
        descripcion: "telefono fijo",
        numero: "7317645"
      },
      {
        descripcion: "numero contacto",
        numero: "3045679052"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "NIP",
    nombre: "Alba",
    documento: "6723603",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Cali",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 33,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Cafesalud",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3154146730"
      },
      {
        descripcion: "telefono fijo",
        numero: "7583345"
      },
      {
        descripcion: "numero contacto",
        numero: "3016756617"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "NIT",
    nombre: "Esteban",
    documento: "1127342619",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Medellin",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 23,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Sanitas",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3124142683"
      },
      {
        descripcion: "telefono fijo",
        numero: "7317645"
      },
      {
        descripcion: "numero contacto",
        numero: "3045679052"
      }
    ]
  }
)


db.personas.insertOne(
  {
    tipoDocumento: "CC",
    nombre: "Elizabeth",
    documento: "10011823479",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Duitama",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 18,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Unimeq",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3213587690"
      },
      {
        descripcion: "telefono fijo",
        numero: "7314673"
      },
      {
        descripcion: "numero contacto",
        numero: "3056784213"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "NIP",
    nombre: "Jacobo",
    documento: "1145237894",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Medellin",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 10,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Coomeva",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3167574358"
      },
      {
        descripcion: "telefono fijo",
        numero: "7402122"
      },
      {
        descripcion: "numero contacto",
        numero: "3185462222"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "NIP",
    nombre: "Luna",
    documento: "1010238829",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Armenia",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 21,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Cafesalud",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3113008695"
      },
      {
        descripcion: "telefono fijo",
        numero: "7555555"
      },
      {
        descripcion: "numero contacto",
        numero: "3220045210"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "TI",
    nombre: "Mariana",
    documento: "1423861302",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Cali",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 10,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Unimeq",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3162285205"
      },
      {
        descripcion: "telefono fijo",
        numero: "7508221"
      },
      {
        descripcion: "numero contacto",
        numero: "3163989874"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "CC",
    nombre: "Javier",
    documento: "44311819",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Bogota",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
    edad: 70,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Famisanar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3182431828"
      },
      {
        descripcion: "telefono fijo",
        numero: "7799377"
      },
      {
        descripcion: "numero contacto",
        numero: "3137799693"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "CE",
    nombre: "Amelia",
    documento: "8608381584",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Medellin",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 25,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Famisanar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3022653008"
      },
      {
        descripcion: "telefono fijo",
        numero: "7530065"
      },
      {
        descripcion: "numero contacto",
        numero: "3132137350"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "TI",
    nombre: "Alejandra",
    documento: "1000652926",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Duitama",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 16,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Sanitas",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "beneficiario"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3122580338"
      },
      {
        descripcion: "telefono fijo",
        numero: "7319046"
      },
      {
        descripcion: "numero contacto",
        numero: "3187526244"
      }
    ]
  }
)

db.personas.insertOne(
  {
    tipoDocumento: "CE",
    nombre: "Laura",
    documento: "1020664210",
    ciudad: db.ciudad.findOne(
      {
        nombre: "Armenia",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
    edad: 22,
    eps: {
      eps: db.eps.findOne(
        {
          nombre: "Compensar",
        },
        {_id: 1}
      )._id,
      fechaAfiliacion: new Date(),
      tipo: "cotizante"
    },
    telefonos: [
      {
        descripcion: "numero celular",
        numero: "3113466970"
      },
      {
        descripcion: "telefono fijo",
        numero: "7326678"
      },
      {
        descripcion: "numero contacto",
        numero: "3125754155"
      }
    ]
  }
)

var fecha1 = new Date("2020, 10, 31")
var fecha2 = new Date("2020, 08, 22")
var fecha3 = new Date("2020, 01, 27")
var fecha4 = new Date("2020, 02, 07")
var fecha5 = new Date("2020, 02, 21")

db.llamadas.insert(
  {
    date: fecha1,
    persona: db.personas.findOne({tipoDocumento: "CC", documento: "123412123"})._id,
    numero: 1,
    acepto: false,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne({nombre: "Movistar Arena"})._id,
      fecha: fecha2
    }
  }
)

db.llamadas.insert(
  {
    date: fecha2,
    persona: db.personas.findOne({tipoDocumento: "CC", documento:  "123412123"})._id ,
    numero: 1,
    acepto: false,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Movistar Arena"
        },
        {_id: 1}
      )._id,
      fecha: fecha3
    }
  }
)

db.llamadas.insert(
  {
    date: fecha3,
    persona: db.personas.findOne({tipoDocumento: "NIT", documento:  "41911614"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Parqueadero PUJ"
        },
        {_id: 1}
      )._id,
      fecha: fecha4
    }
  }
)

db.llamadas.insert(
  {
    date: fecha4,
    persona: db.personas.findOne({tipoDocumento: "CC", documento:  "7223401"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Hospital Universitario de Santander"
        },
        {_id: 1}
      )._id,
      fecha: fecha5
    }
  }
)

db.llamadas.insert(
  {
    date: fecha2,
    persona: db.personas.findOne({tipoDocumento: "CE", documento:  "809746593"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Hospital Universitario de Santander"
        },
        {_id: 1}
      )._id,
      fecha: fecha4
    }
  }
)

db.llamadas.insert(
  {
    date: fecha3,
    persona: db.personas.findOne({tipoDocumento: "TI", documento:  "1191161400"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Parqueadero PUJ"
        },
        {_id: 1}
      )._id,
      fecha: fecha5
    }
  }
)

db.llamadas.insert(
  {
    date: fecha3,
    persona: db.personas.findOne({tipoDocumento: "CC", documento:  "100032290"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Movistar Arena"
        },
        {_id: 1}
      )._id,
      fecha: fecha4
    }
  }
)

db.llamadas.insert(
  {
    date: fecha1,
    persona: db.personas.findOne({tipoDocumento: "TI", documento:  "104383528"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne(
        {
          nombre: "Hospital San Juan de Dios"
        },
        {_id: 1}
      )._id,
      fecha: fecha3
    }
  }
)

db.llamadas.insert(
  {
    date: fecha2,
    persona: db.personas.findOne({tipoDocumento: "NIP", documento:  "635271894"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne({nombre: "Hospital General de Medellin"})._id,
      fecha: fecha4
    }
  }
)

db.llamadas.insert(
  {
    date: fecha2,
    persona: db.personas.findOne({tipoDocumento: "TI", documento:  "1001823479"})._id ,
    numero: 1,
    acepto: true,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne({nombre: "Hospital General de Medellin"})._id,
      fecha: fecha5
    }
  }
)

db.llamadas.insert(
  {
    date: fecha2,
    persona: db.personas.findOne({tipoDocumento: "CC", documento:  "1234123452343"})._id,
    numero: 1,
    acepto: false,
    asistira: true,
    cita: {
      centroVacunacion: db.centrosVacunacion.findOne({nombre: "Movistar Arena"})._id,
      fecha: fecha3
    }
  }
)

db.vacunaciones.insert(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha1,
        persona: db.personas.findOne({tipoDocumento: "CC", documento:  "1234123452343"})._id,
      }
    )._id,
    fecha: new Date(),
    reacciones: [],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre: "astraZeneca"})._id
  }
)

db.vacunaciones.insert(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha1,
        persona: db.personas.findOne({tipoDocumento: "CC", documento: "123412123"})._id
      }
    )._id,
    fecha: new Date(),
    reacciones: [
      "mareo"
    ],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre: "AstraZeneca"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha3,
        persona: db.personas.findOne({tipoDocumento: "NIT", documento:  "41911614"})._id ,
      }
    )._id,
    fecha: new Date("2021, 07, 26"),
    reacciones: ["Nauceas", "Dolor de cabeza"],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"Influenza"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha4,
        persona: db.personas.findOne({tipoDocumento: "CC", documento:  "7223401"})._id ,
      }
    )._id,
    fecha: new Date("2021, 04, 02"),
    reacciones: [],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"Poliomielitis"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha2,
        persona: db.personas.findOne({tipoDocumento: "CE", documento:  "809746593"})._id ,
      }
    )._id,
    fecha: new Date("2021, 08, 04"),
    reacciones: ["Hinchazon", "Comezon"],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"Poliomielitis"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha3,
        persona: db.personas.findOne({tipoDocumento: "TI", documento:  "1191161400"})._id ,
      }
    )._id,
    fecha: new Date("2021, 08, 07"),
    reacciones: [""],
    acompanhado: false,
    vacuna: db.vacunas.findOne({nombre:"Neumocócica"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha3,
        persona: db.personas.findOne({tipoDocumento: "CC", documento:  "100032290"})._id ,
      }
    )._id,
    fecha: new Date("2021, 02, 21"),
    reacciones: [],
    acompanhado: false,
    vacuna: db.vacunas.findOne({nombre:"Neumocócica"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha1,
        persona: db.personas.findOne({tipoDocumento: "TI", documento:  "104383528"})._id ,
      }
    )._id,
    fecha: new Date("2021, 12, 31"),
    reacciones: ["Fiebre", "Dolor de cabeza", "Comezon", "Dolor de cuerpo", "Ardor de ojos"],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"AstraZeneca"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha2,
        persona: db.personas.findOne({tipoDocumento: "NIP", documento:  "635271894"})._id ,
      }
    )._id,
    fecha: new Date("2021, 08, 24"),
    reacciones: ["Dolor de cuerpo"],
    acompanhado: false,
    vacuna: db.vacunas.findOne({nombre:"Tétanos"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha2,
        persona: db.personas.findOne({tipoDocumento: "CC", documento:  "1234123452343"})._id,
      }
    )._id,
    fecha: new Date("2021, 10, 03"),
    reacciones: ["Dolor de rodillas"],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"Rotavirus"})._id
  }
)

db.vacunaciones.insertOne(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha1,
        persona: db.personas.findOne({tipoDocumento: "CC", documento: "123412123"})._id
      }
    )._id,
    fecha: new Date("2021, 03, 04"),
    reacciones: [],
    acompanhado: true,
    vacuna: db.vacunas.findOne({nombre:"Neumocócica"})._id
  }
)
