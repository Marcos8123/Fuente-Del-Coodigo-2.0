var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="yellow";
width_of_line=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").Value;
width_of_line-document.getElementById("width_of_line");
console.log(color);
mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x -e.clientX - canvas.offsetLeft;
current_position_of_mouse_y -e.clientY - canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveto(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}
}
function circle(mouse_x, mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y , 40, 0, 2*Math.PI);
ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}