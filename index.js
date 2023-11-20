
const express = require("express");
// importo dotenv
const dotenv = require("dotenv");
dotenv.config();
// importo il router
const eventsRouter = require ('./router/events');
// importo il model
const singelEvent = require('./models/event');
// esporto il middleware degli errori
const errorsFormatterMiddleware = require("./middlewares/errorsFormatter");



//********************** Creazione di un'istanza del models **********************
const event = new singelEvent(1, 'zoom meeting', 'corso React Boolean', '2023-12-01', 26);
console.log(event instanceof singelEvent); 

singelEvent.createEvent(1, 'zoom meeting', 'corso React Boolean', '2023-12-01', 26);
console.log(event);
//********************** Fine Creazione di un'istanza del models **********************

// istanza di express
const app = express();

// ********************** Rotte relative all'entità events **********************
app.use("/events", eventsRouter);

// Gestione degli errori
app.use(errorsFormatterMiddleware)


// Avviamo il server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
