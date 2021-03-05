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

app.stage.addChild(rectangle1.renderBlock());
app.stage.addChild(rectangle2.renderBlock());
app.stage.addChild(rectangle3.renderBlock());
app.stage.addChild(rectangle4.renderBlock());
app.stage.addChild(rectangle5.renderBlock());
app.stage.addChild(rectangle6.renderBlock());
app.stage.addChild(rectangle7.renderBlock());
app.stage.addChild(rectangle8.renderBlock());
app.stage.addChild(rectangle9.renderBlock());

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

},{}]},{},[1]);
