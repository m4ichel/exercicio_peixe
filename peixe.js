var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logoInteli', 'assets/logo-inteli_branco.png')
    this.load.image('peixe', 'assets/peixes/peixe_listra.png')
    this.load.image('planta', 'assets/plant.png')
}

function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400, 525, 'logoInteli').setScale(0.5);
    this.add.image(650, 400, 'planta').setScale(0.8);
    peixinho = this.add.image(400, 300, 'peixe')
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}