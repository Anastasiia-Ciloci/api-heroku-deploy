const Location = require("./location");
const Trip = require("./trip");
const Traveller = require("./travellers");
// const Traveller = require("./travellers");

//relationships aka assosiaton

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  //as: "trip_location",
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  //as: "location_traveller",
});

Trip.belongsTo(Location, {
  foreignKey: "location_id",
});

Trip.belongsTo(Traveller, {
  foreignKey: "traveller_id",
});

module.exports = { Location, Traveller, Trip };
