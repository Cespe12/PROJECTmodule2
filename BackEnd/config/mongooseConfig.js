//Modularizacion de la conexion
import mongoose from "mongoose"

mongoose.connect("mongodb://database:27017/prueba-mongodb")

export default mongoose;