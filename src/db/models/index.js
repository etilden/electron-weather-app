const User = require('./user'); 
const WeatherAlert = require('./weatherAlert');

WeatherAlert.belongsTo(User);
User.hasMany(WeatherAlert)

module.exports = {
  User, 
  WeatherAlert
}
