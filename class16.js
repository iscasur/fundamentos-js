var sign = prompt("What is your zodiac sign?");

switch (sign) {
  case "acuario":
    console.log(
      "Si bien le cuesta abandonar sus hábitos, debería iniciar algo nuevo. Apueste por una transformación en su vida y así disfrutará de una vitalidad plena."
    );
    break;
  case "piscis":
    console.log(
      "Rompa con los prejuicios que vuelven del pasado y de vuelta la página. Momento para focalizarse en su futuro, ya que contará con energía muy positiva."
    );
    break;
  case "cancer":
  case "cáncer":
    console.log(
      "Hoy se sentirá lleno de confianza con usted mismo y podrá concretar todos los planes que tiene en mente. Aunque no lo crea, deberá guiarse por sus instintos."
    );
    break;
  default:
    console.log("Zodiac sign valid");
    break;
}
