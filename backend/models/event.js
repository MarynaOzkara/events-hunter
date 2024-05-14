const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const eventSchema = new Schema(
  {
    title: String,
    description: String,
    eventDate: String,
    organizer: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
eventSchema.post("save", handleMongooseError);
const Event = model("event", eventSchema);
module.exports = { Event };
