import Alerta from "../models/alerta.js"
import Lectura from "../models/lectura.js"
import Sensor from "../models/sensor.js"

class Service {
    constructor(sensoresDao) {
        this.sensoresDao = sensoresDao
    }

    getAll = async () => {
        return this.sensoresDao.getAll()
    }

    registrarLectura = async (datos) => {
        const lectura = new Lectura(
            datos.id,
            datos.tipo,
            datos.valor,
            datos.timestamp
        )

        const sensor = new Sensor(
            lectura.id,
            lectura.tipo,
            lectura.valor,
            lectura.timestamp
        )

        await this.sensoresDao.save(sensor)

        const mensajeAlerta = this.generarAlerta(lectura)

        return new Alerta(
            lectura.id,
            lectura.tipo,
            lectura.valor,
            lectura.timestamp,
            mensajeAlerta
        )
    }

    generarAlerta = (lectura) => {
        if (lectura.tipo === "TEMPERATURA" && lectura.valor > 35) {
            return "TEMPERATURA alta"
        }

        if (lectura.tipo === "HUMEDAD" && lectura.valor < 20) {
            return "HUMEDAD baja"
        }

        if (lectura.tipo === "CO2" && lectura.valor > 1000) {
            return "CO2 alto"
        }

        return null
    }
}

export default Service
