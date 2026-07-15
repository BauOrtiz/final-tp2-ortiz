import { Router } from "express"
import controller from "../container/container.js"

const routes = Router()

routes.get("/", controller.getAll)
routes.get("/:id", controller.getById)
routes.post("/", controller.create)
routes.put("/:id", controller.update)
routes.delete("/:id", controller.remove)

export default routes
