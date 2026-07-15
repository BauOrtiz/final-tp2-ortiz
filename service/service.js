class Service {
    constructor(sensoresDao) {
        this.sensoresDao = sensoresDao
    }

    getAll = async () => {
        return this.sensoresDao.getAll()
    }
}

export default Service
