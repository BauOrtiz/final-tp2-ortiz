import { Router } from "express"
import controller from "../container/container.js"

const routes = Router()

routes.get("/sensores", controller.getAll)

export default routes
