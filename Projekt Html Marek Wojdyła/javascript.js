alert('Witaj użytkowniku');
alert('Jesteś Pewien');
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2017, 06, 01);

if (someday > today) {
    text = "Today is  January 2017-06-01.";
} else {
    text = "Today is  January 2017-06-01.";
}
document.getElementById("demo").innerHTML = text;
