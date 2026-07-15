import express from "express"
import routes from "./router/routes.js"
import errorMiddleware from "./middelwares/errorMiddleware.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorMiddleware)

app.listen(8000, () => {
    console.log('8000')
}
)
