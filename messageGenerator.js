var teams = ["Seahawks", "Chiefs", "Bills", "Steelers", "Packers", "Saints"];
var subjects = ["Math", "English", "Science", "History", "Music"];
var temperature = ["20", "30", "40", "50", "60", "70", "80"];

let n = 10 * Math.random();

var teamsIndex = Math.abs(Math.floor(Math.random() * teams.length) - 1);
var subjectsIndex = Math.abs(Math.floor(Math.random() * subjects.length) - 1);
var temperatureIndex = Math.abs(Math.floor(Math.random() * temperature.length) - 1);

if (n < 3){
    console.log("The " + teams[teamsIndex] + " will win the Super Bowl");
} else if(n >= 3 && n < 6 ){
    console.log(subjects[subjectsIndex] + " is my favorite subject");
} else{
    console.log("The temperature is " + temperature[temperatureIndex] + " degrees F");
}
