class Lectura {
    constructor(id, tipo, valor, timestamp) {
        Lectura.validar(id, tipo, valor, timestamp)

        this.id = id
        this.tipo = tipo
        this.valor = valor
        this.timestamp = timestamp
    }

    static validar(id, tipo, valor, timestamp) {
        if (typeof id !== "string" || !/^[a-zA-Z0-9]{8}$/.test(id)) {
            throw new Error("El id debe tener exactamente 8 caracteres alfanumericos")
        }

        const tiposValidos = ["TEMPERATURA", "HUMEDAD", "CO2"]

        if (!tiposValidos.includes(tipo)) {
            throw new Error("El tipo debe ser TEMPERATURA, HUMEDAD o CO2")
        }

        if (typeof valor !== "number" || !Number.isFinite(valor)) {
            throw new Error("El valor debe ser un numero valido")
        }

        if (typeof timestamp !== "string") {
            throw new Error("El timestamp debe ser un string")
        }
    }
}

export default Lectura
