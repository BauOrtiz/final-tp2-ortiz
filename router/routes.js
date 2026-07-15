import { Router } from "express"
import controller from "../container/container.js"

const routes = Router()

routes.get("/", controller.getAll)

export default routes
