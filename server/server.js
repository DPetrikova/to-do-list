const express = require("express")
const fs = require("fs")
const cors = require("cors")
const { prototype } = require("stream")

const app = express()
const PORT = 3001
const DATA_FILE = "./tasks.json"

app.use(cors())
app.use(express.json())

app.get("/tasks", (req, res) => {
    const data = fs.readFileSync(DATA_FILE, "utf-8")
    res.json(JSON.parse(data))
})

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`)
})