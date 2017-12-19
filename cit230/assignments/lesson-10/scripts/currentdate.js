var d = new Date();
var getMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var getDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
document.getElementById("currentdate").innerHTML = getDay[d.getDay()] + ' ' + d.getDate() + ' ' + getMonth[d.getMonth()] + ' ' + d.getFullYear();