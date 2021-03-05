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
