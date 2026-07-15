import Controller from "../controllers/controller.js";
import Service from "../service/service.js";

const service = new Service()
const controller = new Controller(service)

export default controller
