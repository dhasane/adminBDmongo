db.vacunaciones.find().forEach( (elem) =>
    {
        var idVacuna = elem.vacuna;
        var nombre_vacuna = db.vacunas.findOne({_id: idVacuna},{_id:0,nombre:1});

        var id_llamada = elem.idLlamada;
        var id_persona = db.llamadas.findOne({_id: id_llamada}, {_id:0,persona:1, "cita.centroVacunacion":1});
        var id_centroVacunacion = id_persona.cita.centroVacunacion;
        var centroVacunacion = db.centrosVacunacion.findOne({_id: id_centroVacunacion},{_id:0,nombre:1});

        var datos_persona = db.personas.findOne({_id: id_persona.persona},{_id:0,nombre: 1, documento: 1, edad:1});

        var fecha = elem.fecha;

        var id_ciudad = db.personas.findOne({_id: id_persona.persona},{_id:0, ciudad:1});;
        var ciudad = db.ciudad.findOne({_id: id_ciudad.ciudad},{_id:0, nombre:1}); 

        printjson(
            {
                vacuna: nombre_vacuna.nombre,
                nombre: datos_persona.nombre,
                documento: datos_persona.documento,
                edad: datos_persona.edad,
                fecha_de_vacunacion: fecha,
                ciudad: ciudad.nombre,
                centro_vacunacion: centroVacunacion.nombre
            }
        )
    }
)