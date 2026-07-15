class Controller {
    constructor(service) {
        this.service = service
    }

    getAll = async (req, res) => {
        try {
            const data = await this.service.getAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ errorMsg: error.message })
        }
    }

    registrarLectura = async (req, res) => {
        try {
            const data = await this.service.registrarLectura(req.body)
            res.status(201).json(data)
        } catch (error) {
            res.status(400).json({ errorMsg: error.message })
        }
    }
}

export default Controller
