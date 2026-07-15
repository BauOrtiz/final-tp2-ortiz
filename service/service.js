class Service {
    data = []
    nextId = 1

    getAll = async () => {
        return this.data
    }

    getById = async (id) => {
        const item = this.data.find(item => item.id === Number(id))

        if (!item) {
            throw new Error("Elemento no encontrado")
        }

        return item
    }

    create = async (item) => {
        const newItem = {
            ...item,
            id: this.nextId++
        }

        this.data.push(newItem)
        return newItem
    }

    update = async (id, changes) => {
        const index = this.data.findIndex(item => item.id === Number(id))

        if (index === -1) {
            throw new Error("Elemento no encontrado")
        }

        this.data[index] = {
            ...this.data[index],
            ...changes,
            id: Number(id)
        }

        return this.data[index]
    }

    remove = async (id) => {
        const index = this.data.findIndex(item => item.id === Number(id))

        if (index === -1) {
            throw new Error("Elemento no encontrado")
        }

        const [deletedItem] = this.data.splice(index, 1)
        return deletedItem
    }
}

export default Service
