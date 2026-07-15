class Controller {
    constructor(service) {
        this.service = service
    }

    getAll = async (req, res, next) => {
        try {
            const data = await this.service.getAll()
            res.status(200).json(data)
        } catch (error) {
            error.statusCode = 500
            next(error)
        }
    }

    registrarLectura = async (req, res, next) => {
        try {
            const data = await this.service.registrarLectura(req.body)
            res.status(201).json(data)
        } catch (error) {
            error.statusCode = 400
            next(error)
        }
    }
}

export default Controller
