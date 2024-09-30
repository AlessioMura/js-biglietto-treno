let age;
let price_for_km = 0.21;
let disc_underage = 20;
let disc_over65 = 40;
let percent = 100;

distance_km = prompt("Inserire i km che il treno percorre");
const ticket_price = price_for_km * distance_km;
alert(ticket_price + "€");

const disc_over = (ticket_price / percent) * disc_over65;
const disc_under = (ticket_price / percent) * disc_underage;

const price_disc_over = ticket_price - disc_over;
const price_disc_under = ticket_price - disc_under;
