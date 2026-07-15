import Controller from "../controllers/controller.js";
import Service from "../service/service.js";
import SensoresDao from "../dao/sensoresDao.js";

const sensoresDao = new SensoresDao()
const service = new Service(sensoresDao)
const controller = new Controller(service)

export default controller
