let today_new = new Date();
today_new.setHours(0, 0, 0, 0);
let show_date = new Date(2027, 1, 8);

let diff = (show_date - today_new) / (1000 * 60 * 60 * 24);
document.getElementById("countdown").innerHTML = diff;   