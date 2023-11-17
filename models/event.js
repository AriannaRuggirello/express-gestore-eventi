
// Milestone 2

//     Creiamo il model (classe) models/event.js e prevediamo le seguenti proprietà:

//     id
//     title
//     description
//     date
//     maxSeats (numero massimo di posti)



const fs = require('fs');
const path = require('path');


class singelEvent 
{
    id;
    title;
    description;
    date;
    maxSeats;

 /**
    *  @param {number} id
     * @param {string} title
     * @param {string} description
     * @param {number} date
     * @param {number} maxSeats
     * 
    */

 constructor(id,title,description,date,maxSeats,) 
    {
        this.id=id;
        this.title=title;
        this.description=description;
        this.date=date;
        this.maxSeats=maxSeats;
        
    }   


// leggo il contenuto e restituisco eventuali errori
    static readEvents() {
        try {
            
            // Leggo il contenuto del db come stringa
            const eventData = fs.readFileSync(path.resolve(__dirname, '../db/events.json'), 'utf8');
            return eventData ? JSON.parse(eventData) : [];
        } catch (error) {
            // Gestisco gli errori durante la lettura del file JSON
            console.error('Errore durante la lettura del file JSON');
            return [];
        }
    }

    /**
     * 
     * @param {Array} events 
     */
    // scrivo sul db
    static writeEvents(events) {
        try {
         
            // Scrivo l'array di eventi nel file JSON, con formattazione per la leggibilità
            fs.writeFileSync(path.resolve(__dirname, '../db/events.json'), JSON.stringify(events, null, 2), 'utf8');
        } catch (error) {
            // Gestisco gli errori durante la scrittura nel file JSON
            console.error('Errore durante la scrittura del file JSON:');
        }
    }

    static createEvent(id, title, description, date, maxSeats) {
        // Leggo tutti gli eventi esistenti
        const existingEvents = singelEvent.readEvents();

        // Verifico se esiste già un evento con lo stesso ID
        const existingEvent = existingEvents.find(event => event.id === id);

        // Se non esiste, aggiungo il nuovo evento e lo salvo nel file JSON
        if (!existingEvent) {
            // Creo un nuovo evento
            const newEvent = new singelEvent(id, title, description, date, maxSeats);
            // Aggiungo il nuovo evento agli eventi esistenti
            existingEvents.push(newEvent);

            // Scrivo i dati nel file JSON
            singelEvent.writeEvents(existingEvents);

            console.log('Evento creato è stato salvato con successo.');
        } else {
            console.log('L\'evento con lo stesso ID già esiste.');
        }
    }

    static getEventFromId(eventId) {
        // Leggo tutti gli eventi esistenti
        const existingEvents = SingelEvent.readEvents();
    
        // Trovo l'evento con l'ID specificato
        const event = existingEvents.find(event => event.id === eventId);
    
        return event || null;
      }
    
    
      static filterEventsByMaxSeats(maxSeats) {
        // Leggo tutti gli eventi esistenti
        const existingEvents = singelEvent.readEvents();
    
        // Filtro gli eventi per numero massimo di posti
        if (maxSeats) {
          return existingEvents.filter(event => event.maxSeats >= maxSeats);
        }
    
       
        return existingEvents;
      }
}
 
module.exports = singelEvent;


