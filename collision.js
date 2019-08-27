function createEnemy() {
    let speed = Math.floor(Math.random() * 10) + 5;
    let thisY = Math.floor(Math.random() * 500);
    let enemy = new Enemy(980, thisY, speed, 'enemy.png');

    enemy.drawEnemy();
    _enemy.push(enemy);

    function moveSpeed() {
        if (enemy.x > -100) {
            enemy.moveEnemy();

            enemy.drawEnemy();
        } else {
            enemy.resetX();
            enemy.drawEnemy();
        }
        setTimeout(moveSpeed, 100 / 6);
    }

    moveSpeed();


}
function creatMultipleEnemy() {
    for (let i = 0; i < 10; i++) {
        createEnemy();
    }
}
creatMultipleEnemy();
