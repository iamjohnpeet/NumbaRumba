function Block(size, colour, number, position) {
    this.size = size;
    this.colour = colour;
    this.number = number;
    this.position = position;

    this.numberText = new PIXI.Text(this.number, {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0x000000,
        zIndex: 10,
        align: 'center'
    });
    this.numberText.x = this.position.x + 26;
    this.numberText.y = this.position.y + 20;

    this.block = new PIXI.Graphics();
    this.block.lineStyle(2, 0x222222, 1);
    this.block.beginFill(this.colour);
    this.block.drawRoundedRect(0, 0, this.size, this.size, 6);
    this.block.endFill();
    this.block.x = this.position.x;
    this.block.y = this.position.y;
    this.block.interactive = true;
    this.block.dragging = false;

    this.block
        // events for drag start
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);


}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.dragging = true;
}

function onDragEnd() {
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove(e) {
    if (this.dragging) {
        console.log(this)
        this.position.x = e.data.global.x - 32;
        this.position.y = e.data.global.y - 32;
    }
}

module.exports = Block;
