(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Block =  require('./modules/block.js');

let app = new PIXI.Application({
    width: 520,         // default: 800
    height: 640,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,      // default: 1
    backgroundColor: '0xFFFFFF'
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const red = '0xE3283E'
const yellow = '0xE3AC12'
const blue = '0x01ACED'

const rectSize = 64;
const rectMiddle = rectSize / 2;
const gutter = 20;
const rectWithGutter = rectSize + gutter;
const boardBottom = (app.renderer.view.height - (rectSize * 2));

const screenMiddle = {
    vertical: app.renderer.view.height / 2,
    horizontal: app.renderer.view.width / 2
}

const leftPositions = {
    bottom: {
        vertical: boardBottom,
        horizontal: screenMiddle.horizontal - (rectWithGutter * 2),
    },
    middle: {
        vertical: boardBottom - rectWithGutter,
        horizontal: screenMiddle.horizontal - (rectWithGutter * 2),
    },
    top: {
        vertical: boardBottom - (rectWithGutter * 2),
        horizontal: screenMiddle.horizontal - (rectWithGutter * 2),
    }
}

const middleLeftPositions = {
    bottom: {
        vertical: boardBottom,
        horizontal: screenMiddle.horizontal - (rectWithGutter),
    },
    middle: {
        vertical: boardBottom - rectWithGutter,
        horizontal: screenMiddle.horizontal - (rectWithGutter),
    },
    top: {
        vertical: boardBottom - (rectWithGutter * 2),
        horizontal: screenMiddle.horizontal - (rectWithGutter),
    }
}

const middleRightPositions = {
    bottom: {
        vertical: boardBottom,
        horizontal: screenMiddle.horizontal,
    },
    middle: {
        vertical: boardBottom - rectWithGutter,
        horizontal: screenMiddle.horizontal,
    },
    top: {
        vertical: boardBottom - (rectWithGutter * 2),
        horizontal: screenMiddle.horizontal,
    }
}

const rightPositions = {
    bottom: {
        vertical: boardBottom,
        horizontal: screenMiddle.horizontal + (rectWithGutter * 2),
    },
    middle: {
        vertical: boardBottom - rectWithGutter,
        horizontal: screenMiddle.horizontal + (rectWithGutter * 2),
    },
    top: {
        vertical: boardBottom - (rectWithGutter * 2),
        horizontal: screenMiddle.horizontal + (rectWithGutter * 2),
    }
}

let rectangle1 = new Block(rectSize, red, 1, {
    x: leftPositions.bottom.horizontal,
    y: leftPositions.bottom.vertical,
});
let rectangle2 = new Block(rectSize, red, 2, {
    x: leftPositions.middle.horizontal,
    y: leftPositions.middle.vertical,
});
let rectangle3 = new Block(rectSize, red, 3, {
    x: leftPositions.top.horizontal,
    y: leftPositions.top.vertical,
});
let rectangle4 = new Block(rectSize, blue, 1, {
    x: middleLeftPositions.bottom.horizontal,
    y: middleLeftPositions.bottom.vertical,
});
let rectangle5 = new Block(rectSize, blue, 2, {
    x: middleLeftPositions.middle.horizontal,
    y: middleLeftPositions.middle.vertical,
});
let rectangle6 = new Block(rectSize, blue, 3, {
    x: middleLeftPositions.top.horizontal,
    y: middleLeftPositions.top.vertical,
});
let rectangle7 = new Block(rectSize, yellow, 1, {
    x: middleRightPositions.bottom.horizontal,
    y: middleRightPositions.bottom.vertical,
});
let rectangle8 = new Block(rectSize, yellow, 2, {
    x: middleRightPositions.middle.horizontal,
    y: middleRightPositions.middle.vertical,
});
let rectangle9 = new Block(rectSize, yellow, 3, {
    x: middleRightPositions.top.horizontal,
    y: middleRightPositions.top.vertical,
});

app.stage.addChild(rectangle1.block);
app.stage.addChild(rectangle1.numberText);

app.stage.addChild(rectangle2.block);
app.stage.addChild(rectangle2.numberText);

app.stage.addChild(rectangle3.block);
app.stage.addChild(rectangle3.numberText);

app.stage.addChild(rectangle4.block);
app.stage.addChild(rectangle4.numberText);

app.stage.addChild(rectangle5.block);
app.stage.addChild(rectangle5.numberText);

app.stage.addChild(rectangle6.block);
app.stage.addChild(rectangle6.numberText);

app.stage.addChild(rectangle7.block);
app.stage.addChild(rectangle7.numberText);

app.stage.addChild(rectangle8.block);
app.stage.addChild(rectangle8.numberText);

app.stage.addChild(rectangle9.block);
app.stage.addChild(rectangle9.numberText);


// Simple log of Pixi working
let type = "WebGL"

if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)

},{"./modules/block.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
