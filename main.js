var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d");

color = "grey"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

color1 = "blue"

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color2 = "black"

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color3 = "red"

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color4 = "yellow"

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

lastColor = "green"

ctx.beginPath();
ctx.strokeStyle = lastColor;
ctx.lineWidth = 5;
ctx.arc(400, 247, 40, 0, 2 * Math.PI);
ctx.stroke();