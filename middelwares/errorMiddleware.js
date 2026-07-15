const errorMiddleware = (error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
        return res.status(400).json({ errorMsg: "El body debe contener un JSON valido" })
    }

    const statusCode = error.statusCode || error.status || 500

    res.status(statusCode).json({ errorMsg: error.message })
}

export default errorMiddleware
