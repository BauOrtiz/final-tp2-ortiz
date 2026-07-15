class Controller {
    constructor(service) {
        this.service = service
    }

    getAll = async (req, res) => {
        try {
            const data = await this.service.getAll()
            res.status(200).send({ message: data })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    getById = async (req, res) => {
        try {
            const data = await this.service.getById(req.params.id)
            res.status(200).send({ message: data })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    create = async (req, res) => {
        try {
            const data = await this.service.create(req.body)
            res.status(201).send({ message: data })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    update = async (req, res) => {
        try {
            const data = await this.service.update(req.params.id, req.body)
            res.status(200).send({ message: data })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    remove = async (req, res) => {
        try {
            const data = await this.service.remove(req.params.id)
            res.status(200).send({ message: data })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default Controller
