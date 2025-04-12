import app from "./app.js"
import { PORT } from "./config.js"
import './config/database.js'

app.listen(PORT)
console.log("Servidor corriendo en el puerto: ", PORT);
