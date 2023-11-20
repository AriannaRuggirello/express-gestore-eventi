// importo il model
const singelEvent = require('../models/event');

function index(req, res) {
    res.type('html')
   
    // Estraggo il filtro maxSeats dalla query string della richiesta
    const maxSeats = req.query.maxSeats;

    // Chiamata al metodo statico del modello per ottenere tutti gli eventi con il filtro sui posti
    const events = singelEvent.filterEventsByMaxSeats(maxSeats);

    // Restituisci gli eventi filtrati come risposta JSON
    res.json(events);
    
}

function store(req, res) {
    res.send('questa è la mia store page')
}

function show(req, res) {
    res.type('html')
    // Ottengo l'id del evento dalla richiesta
    const eventId = parseInt(req.params.id);
      // Chiamata al metodo statico del modello per ottenere l'evento con l'ID specificato
      const event = singleEvent.getEventFromId(eventId);

    // Se non ho trovato l'evento, restituisco un errrore
    if (!event) {
        res.status(404).send(`Evento non trovato`);
        return;
    }
    
    res.send(event);
  }
   


function update(req, res) {
    res.send('questa è la mia update page')
}

module.exports = {
    index,
    store,
    show,
    update
}
 