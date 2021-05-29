
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
    nombre: "Albin Yakitory",
    documento: "123412123",
    ciudad: db.ciudad.findOne(
      {
        nombre: "bogota",
      },
      {_id: 1}
    )._id,
    genero: "hombre",
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

db.personas.insert(
  {
    tipoDocumento: "CC",
    nombre: "cualquier nombre",
    documento: "1234123452343",
    ciudad: db.ciudad.findOne(
      {
        nombre: "bogota",
      },
      {_id: 1}
    )._id,
    genero: "mujer",
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
        numero: "numesdfasdfarooo"
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

var usr2 = db.personas.findOne(
  {
    tipoDocumento: "CC",
    documento:  "1234123452343"
  },
  {_id: 1}
)._id

db.llamadas.insert(
  {
    date: fecha,
    persona: usr2,
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
    idLlamada: db.llamadas.findOne(
      {
        date: fecha,
        persona: usr2
      },
      {_id: 1}
    )._id,
    fecha: new Date(),
    reacciones: [],
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

db.vacunaciones.insert(
  {
    idLlamada: db.llamadas.findOne(
      {
        date: fecha,
        persona: usr
      },
      {_id: 1}
    )._id,
    fecha: new Date(),
    reacciones: [
      "mareo"
    ],
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

db.vacunas.insertMany([
  {nombre: "AstraZeneca"}, 
  {nombre: "Poliomielitis"}, 
  {nombre: "Influenza"}, 
  {nombre: "Neumocócica"}, 
  {nombre: "Rotavirus"}, 
  {nombre: "Tétanos"}]
  )

  db.ciudad.insertMany([
    {nombre: "Bogota"}, 
    {nombre: "Bucaramanga"}, 
    {nombre: "Cali"}, 
    {nombre: "Armenia"}, 
    {nombre: "Medellin"}, 
    {nombre: "Duitama"}]
    )

  db.eps.insertMany([
    {nombre: "Cafesalud"}, 
    {nombre: "Sanitas"}, 
    {nombre: "Compensar"}, 
    {nombre: "Coomeva"}, 
    {nombre: "Unimeq"}, 
    {nombre: "Famisanar"}]
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
    tipo: "beneficiaria"
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
    tipo: "beneficiaria"
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
      nombre: "Santander",
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
      nombre: "",
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

db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 03, 04"), reacciones: [], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"Neumocócica"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 04, 03"), reacciones: ["Mareo"], acompanhado: false, vacuna: db.vacunas.findOne({nombre:"Rotavirus"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 07, 26"), reacciones: ["Nauceas", "Dolor de cabeza"], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"Influenza"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 04, 02"), reacciones: [], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"Poliomielitis"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 08, 04"), reacciones: ["Hinchazon", "Comezon"], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"Poliomielitis"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 08, 07"), reacciones: [""], acompanhado: false, vacuna: db.vacunas.findOne({nombre:"Neumocócica"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 02, 21"), reacciones: [], acompanhado: false, vacuna: db.vacunas.findOne({nombre:"Neumocócica"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 12, 31"), reacciones: ["Fiebre", "Dolor de cabeza", "Comezon", "Dolor de cuerpo", "Arodr de ojos"], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"AstraZeneca"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 08, 24"), reacciones: ["Dolor de cuerpo"], acompanhado: false, vacuna: db.vacunas.findOne({nombre:"Tétanos"})})
  db.vacunaciones.insertOne({idLlamada:"", fecha: new Date("2021, 10, 03"), reacciones: ["Dolor de rodillas"], acompanhado: true, vacuna: db.vacunas.findOne({nombre:"Rotavirus"})})
  