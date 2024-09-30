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

age = prompt("Inerire l'età");

if (age < 18) {
  alert(price_disc_under.toFixed(2) + "€");
} else if (age >= 65) {
  alert(price_disc_over.toFixed(2) + "€");
} else {
  alert(ticket_price.toFixed(2) + "€");
}
