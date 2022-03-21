import express from 'express';

import { EXPRESS_SERVER_PORT } from "./constants.js";
import router from "./router.js";

const app = express();

app.use(express.json())
app.use(router)
app.listen(EXPRESS_SERVER_PORT, () => {
    console.log(`Running POC on port ${EXPRESS_SERVER_PORT}`)
})
