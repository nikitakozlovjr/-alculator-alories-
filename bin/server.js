import app from "../app/app.js"

const port = 3000;
app.listen(port, () => {
    console.log(`Server has been started on http://localhost:${port}`)
})