const express = require("express");
const { getAllEvents, createEvent } = require("../../controllers/events");
const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);

module.exports = router;
