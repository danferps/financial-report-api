import express from 'express'
import ruleRoute from './routes/rule.route'

const app = express()
const port = 3000
const apiBase = "/api"
app.use(express.json())

//#region routes
app.use(apiBase, ruleRoute)
//#endregion routes

app.listen(port)

console.log("Server on port", port)
