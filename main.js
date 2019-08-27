let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext('2d');
function MainCharacter(x, y, speed, img) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = img;
    let image = new Image();
    this.drawMain = function () {
        let that = this;
        image.src = this.img;
        image.onload = function () {
            ctx.drawImage(image, that.x, that.y, 100, 50);
        }
    };
    this.mainLeft = function () {
        ctx.clearRect(this.x, this.y, 100, 50);
        this.x -= this.speed;
    };
    this.mainRight = function () {
        ctx.clearRect(this.x, this.y, 100, 50);
        this.x += this.speed;
    };
    this.mainUp = function () {
        ctx.clearRect(this.x, this.y, 100, 50);
        this.y -= this.speed

    };
    this.mainDown = function () {
        ctx.clearRect(this.x, this.y, 100, 50);
        this.y += this.speed;
    }


}
function moveMain(evt){
    switch (evt.which) {
        case 37:
            main.mainLeft();
            main.drawMain();
            break;
        case 39:
            main.mainRight();
            main.drawMain();
            break;
        case 38:
            main.mainUp();
            main.drawMain();
            break;
        case 40:
            main.mainDown();
            main.drawMain();
            break;
    }
    if ((main.x <= 0) &&(main.y >= 0) &&(main.y <= canvas.height - 25)){
        main.x = 0;
        main.drawMain();
    }else if ((main.y <= 0) && (main.x >= 0) && (main.x <= canvas.width - 50)){
        main.y = 0;
        main.drawMain();
    }else if ((main.y >= canvas.height -25)  && (main.x >= 0) && (main.x <= canvas.width - 50)){
        main.y = canvas.height - 50;
        main.drawMain();
    }else if ((main.x >= canvas.width - 50) &&(main.y >= 0) &&(main.y <= canvas.height - 25)){
        alert('you win!');
        location.reload();
    }
}
function docReady() {
    window.addEventListener('keydown', moveMain);

}

let main = new MainCharacter(0,225,50,'main.png');
alert('Are you ready?');
main.drawMain();

