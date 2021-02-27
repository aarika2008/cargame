canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = upload_rover;
    car1_imgtag.src = rover_image;
}

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = upload_rover;
    car2_imgtag.src = rover_image;
}

function upload_background() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function upload_background() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgtag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
 {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') 
    {
        car1_up();
        console.log("up");
    }
    if (keypressed == '40') {
        car1_down();
        console.log("down");
    }
}
if (keypressed == '37') {
    car1_left();
    console.log("left");
}

if (keypressed == '39') {
    car1_right();
    console.log("right");
}

if (keypressed == '39') {
    car2_up();
    console.log("right");
}

function up() {
    if (car1_y >= 0) {
        car1_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + rover_y);
    upload_background()
    uploadrover();
}
}

function down() {
    if (car1_y >= 0) {
        car1_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
    upload_background()
    uploadrover();
}
}

function left() {
    if (car1_x >= 0) {
        car1_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (car1_x >= 0) {
        car1_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (car2_x >= 0) {
        car2_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadrover();
    }
}