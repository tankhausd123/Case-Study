
let _enemy =[];
function Enemy(x, y, speed, img) {
    this.initialX = x;
    this.x = x;
    this.y = y;

    this.speed = speed  ;
    this.img = img;
    let image = new Image();

    this.drawEnemy = function () {
        let self = this;

        image.src = this.img;
        image.onload = function () {
            ctx.drawImage(image, self.x, self.y, 100, 50);

        };
          if ((((main.x + 50) >= this.x) && (main.y >= this.y) && (main.y <= (this.y + 50)))
          || (((main.x + 50) >= this.x) && (main.y <= this.y) && ((main.y + 50) >= this.y))) {

            alert('You are lose! Do you want to play again?');
            location.reload();
        }
    };
    this.moveEnemy = function () {
        ctx.clearRect(this.x, this.y, 100, 50);

        this.x -= this.speed;

    };
    this.resetX = function () {
        this.x = this.initialX;
    };
}









