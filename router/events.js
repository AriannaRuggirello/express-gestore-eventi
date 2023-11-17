const express= require('express');
// istanza router
const router= express.Router();
const eventController = require("../controller/events");


// Milestone 1
//     Creiamo le seguenti rotte con relativo controller e router senza implementare le funzioni del controller.
//     [GET] events/ (index)
//     [POST] events/ (store)
//     [PUT] events/:event (update)
// Definiamo le rotte
router.get("/", eventController.index);
router.post("/", eventController.store);
router.post("/:id", eventController.show);

router.put("/:event", eventController.update);


module.exports = router;