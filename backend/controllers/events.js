const ctrlWrapper = require("../midlewares/ctrWrapper");
const { Event } = require("../models/event");

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Event.find().skip(skip).limit(limit);
  const total = await Event.countDocuments();
  res.json({
    total,
    page,
    limit,
    data,
  });
};
const createEvent = async (req, res) => {
  const { title, description, eventDate, organizer } = req.body;
  const newEvent = new Event({ title, description, eventDate, organizer });
  newEvent.save();
  res.status(201).json(newEvent);
};
module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
  createEvent: ctrlWrapper(createEvent),
};
