import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import userRoutes from "../src/handlers/users";
import productRoutes from "../src/handlers/products";
import orderRoutes from "../src/handlers/orders";

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
const address: string = "0.0.0.0:3000"
// HTTP request logger middleware
//app.use(morgan('short'))
app.use(bodyParser.json());

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello To my Website'
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
userRoutes(app);
productRoutes(app);
orderRoutes(app);
export default app