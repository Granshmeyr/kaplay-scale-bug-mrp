import kaplay from "https://unpkg.com/kaplay@4000.0.0-alpha.15/dist/kaplay.mjs";

const k = kaplay({
    background: "#00ff00",
    global: false,
    stretch: false,
    letterbox: false,
    width: 1000,
    height: 1000,
    crisp: true,
});

const NAME = "tree"
const SCALE = 6 // bugs while v > 5
const GRID_SIZE = 10
const X_SPACING = 10
const Y_SPACING = 10

k.loadSprite(NAME, `${NAME}.png`)
const data = await k.getSprite(NAME)
for (let y = 0; y < GRID_SIZE; y++ ) {
    for (let x = 0; x < GRID_SIZE; x++) {
        const isTree =
            (y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)
        if (isTree) k.add([
            k.pos(
                k.vec2(x * X_SPACING, y * Y_SPACING).scale(SCALE)
            ),
            k.sprite(NAME, {
                width: data.width * SCALE,
                height: data.height * SCALE,
            })
        ])
    }
}
