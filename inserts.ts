
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
