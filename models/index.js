const User = require('./User');
const Appointment = require("./Appointment");

// create associations
User.hasOne(Appointment, {
    foreignKey: 'user_id'
});
Appointment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Appointment };