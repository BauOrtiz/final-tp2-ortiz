import { Router } from "express"
import controller from "../container/container.js"

const routes = Router()

routes.get("/sensores", controller.getAll)
routes.post("/lecturas", controller.registrarLectura)

export default routes
