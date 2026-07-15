class SensoresDao {
    sensores = []

    getAll = async () => {
        return this.sensores
    }

    save = async (sensor) => {
        const index = this.sensores.findIndex(item => item.id === sensor.id)

        if (index === -1) {
            this.sensores.push(sensor)
        } else {
            this.sensores[index] = sensor
        }

        return sensor
    }
}

export default SensoresDao
