
const express = require("express");
// importo dotenv
const dotenv = require("dotenv");
dotenv.config();


const eventsRouter = require ('./router/events');
// istanza di express
const app = express();

// Rotte relative all'entità events
app.use("/events", eventsRouter)


// Avviamo il server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
