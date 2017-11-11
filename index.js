// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(e => e.toLowerCase());
}
function nameToAttributes(drivers) {
  return drivers.map(e => {firstName:e.split(' ')[0],lastName:e.split(' ')[1]})
  
}