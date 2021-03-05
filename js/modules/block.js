function Block(size, colour, number, position) {
    this.size = size;
    this.colour = colour;
    this.number = number;
    this.position = position;

    this.renderBlock = () => {
        let block = new PIXI.Graphics();

        block.lineStyle(2, 0x222222, 1);
        block.beginFill(this.colour);
        block.drawRoundedRect(0, 0, this.size, this.size, 6);
        block.endFill();
        block.x = this.position.x;
        block.y = this.position.y;

        return block;
    }
}

module.exports = Block;
