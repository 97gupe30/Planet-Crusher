var introX = [-250, 1280];
var introY = 780;
var alpha = 1;
var alpha2 = -2;
var backgrounds = [new Background('images/intro.png')];


var spaceX = -50;
var spaceY = 300;
var spaceShip = new Image();
spaceShip.src = 'images/spaceship.png';

function init() {
    game = document.getElementById('camera');
    ctx = game.getContext('2d');
    ctx.font="50px mainFont";
    
    window.setInterval(update, 25);
}

function Background(src) {
    this.imgSrc = src;
    this.xv = 0;
    this.xy = 0;
    this.zx = 1280;
    this.zy = 720;
    
    var img = new Image();
    img.src = this.imgSrc;
    
    this.render = function() {
        this.xv += .15;
        this.xy += .15;
        this.zx -= .15;
        this.zy -= .15;
        
        ctx.drawImage(img, this.xv, this.xy, this.zx, this.zy, 0, 0, 1280, 720);
    }
}

function introText() {
    ctx.fillStyle = "rgba(21, 58, 82, " + alpha + ")";
    ctx.fillText("CC",introX[1],330);
    ctx.fillText("Studios",introX[0],330);
    ctx.fillText("Presents",480,introY);
    
    if(introX[0] < 570) {
        introX[0] += 3;
        introX[1] -= 3;
        introY -= 1.5;
    } else {
        if(alpha >= 0) {
            alpha -= .01;
        } else {
            alpha2 += .02;
            ctx.fillStyle = "rgba(21, 58, 82, " + alpha2 + ")";
            ctx.fillText("Planet Crusher",340,350);
            if(alpha == 1) {
                spaceX++;
                spaceY++;
                
            }
        }

    }
}

function update() {
    ctx.clearRect(0,0, 1280, 720);
    backgrounds[0].render();
    introText();
    ctx.drawImage(spaceShip, spaceX, spaceY);
}