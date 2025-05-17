import app from "./app.js"
import { PORT } from "./config.js"
import './config/database.js'
import authRoutes from './routes/authRoutes.js'

app.listen(PORT)
console.log("Servidor corriendo en el puerto: ", PORT);

app.use('/api', authRoutes)