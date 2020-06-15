enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const bat2 = SpriteKind.create()
    export const bat1 = SpriteKind.create()
    export const basic = SpriteKind.create()
    export const dragon = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d 1 1 1 d d 1 1 1 d d 1 1 1 d 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d f 1 f 1 f f 1 f 1 f f 1 f 1 f 
d 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 
d 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 
d 1 f f f 1 1 f f f 1 1 f f f 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d 5 5 5 5 d d d d d d 
d d d d d 5 5 d d 5 5 d d d d d 
d d d d d 5 d d d d 5 d d d d d 
d d d d d 5 d d d d 5 d d d d d 
d d d d d 5 5 d d 5 5 d d d d d 
d d d d d d 5 5 5 5 d d d d d d 
d d d d d d d 5 5 d d d d d d d 
d d d d d d d 5 5 d d d d d d d 
d d d d d d d 5 5 d d d d d d d 
d d d d d d d 5 5 5 5 d d d d d 
d d d d d d d 5 5 d d d d d d d 
d d d d d d d 5 5 5 5 d d d d d 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d d d d d d d d d d d d d d d 
d d d d d d 5 5 5 5 d d d d d d 
d d d d d 5 5 d d 5 5 d d d d d 
d d d d d 5 d d d d 5 d d d d d 
d d d d d 5 d d d d 5 d d d d d 
d d d d d 5 5 d d 5 5 d d d d d 
d d d d d d 5 5 5 5 d d d d d d 
d d d d d d d 5 d d d d d d d d 
d d d d d d d 5 d d d d d d d d 
d d d d d d d 5 d 5 d d d d d d 
d d d d d d d 5 5 5 d d d d d d 
d d d d d d d 5 d d d d d d d d 
d d d d d d d 5 5 5 d d d d d d 
d d d d d d d 5 d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
c b 1 1 1 1 1 1 1 1 1 1 1 1 b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
c b d d d d d d d d d d d d b c 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
f f 1 f 1 f f 1 f 1 f f 1 f 1 f 
1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d d 1 f 1 d d 1 f 1 d d 1 f 1 d 
d d 1 1 1 d d 1 1 1 d d 1 1 1 d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d 1 d d d d 1 d d d d 1 d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
1 1 d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
1 d d d d d d d d d d d d d d b 
b b b b b b b b b b b b b b b b 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bat2, function (sprite, otherSprite) {
    bat2.destroy()
    bat2.startEffect(effects.fire, 100)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    wizard.ay = 200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dragon, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 100)
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    wizard.vx += -100
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    bat2.follow(wizard, 50)
    animation.runImageAnimation(
    bat2,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f . . . . . . . . . . . . . . . . . . f f . . . . . 
. . . . f c c f . . . . . c . . . . c . . . . . f c c f . . . . 
. . . . f . c c f . . . . c c . . c c . . . . f c c . f . . . . 
. . . . . . . c c f f . . c f f f f c . . f f c c . . . . . . . 
. . . . . . . . c c c f f f f f f f f f f c c c . . . . . . . . 
. . . . . . . . . . c c c f c f f c f c c c . . . . . . . . . . 
. . . . . . . . . . . c c f f f f f f c c . . . . . . . . . . . 
. . . . . . . . . . . . c f f c c f f c . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . f f f c c c c f c f f c f c c c c f f f . . . . . . 
. . . . f f c c c c c c c f f f f f f c c c c c c c f f . . . . 
. . f f c c c . . . . . c f f c c f f c . . . . . c c c f f . . 
. f c c c . . . . . . . . . f f f f . . . . . . . . . c c c f . 
. f c . . . . . . . . . . f f . . f f . . . . . . . . . . c f . 
. . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . f c f c f f c f c f . . . . . . . . . . . 
. . . . . . . . . . f c c f f f f f f c c f . . . . . . . . . . 
. . . . . . . . . f c c c f f c c f f c c c f . . . . . . . . . 
. . . . . . . . . f c . . . f f f f . . . c f . . . . . . . . . 
. . . . . . . . f c c . . f f . . f f . . c c f . . . . . . . . 
. . . . . . . . f c . . . . . . . . . . . . c f . . . . . . . . 
. . . . . . . . f c . . . . . . . . . . . . c f . . . . . . . . 
. . . . . . . f c c . . . . . . . . . . . . c c f . . . . . . . 
. . . . . . . f c . . . . . . . . . . . . . . c f . . . . . . . 
. . . . . . . f c . . . . . . . . . . . . . . c f . . . . . . . 
. . . . . . . . f . . . . . . . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . f f f c c c c f c f f c f c c c c f f f . . . . . . 
. . . . f f c c c c c c c f f f f f f c c c c c c c f f . . . . 
. . f f c c c . . . . . c f f c c f f c . . . . . c c c f f . . 
. f c c c . . . . . . . . . f f f f . . . . . . . . . c c c f . 
. f c . . . . . . . . . . f f . . f f . . . . . . . . . . c f . 
. . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dragon, function (sprite, otherSprite) {
    projectile.destroy()
    pause(100)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    wizard.vx = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(28, 4), false)
    tiles.setWallAt(tiles.getTileLocation(28, 5), false)
    tiles.setWallAt(tiles.getTileLocation(28, 6), false)
    tiles.setTileAt(tiles.getTileLocation(16, 9), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(28, 4), myTiles.tile6)
    tiles.setTileAt(tiles.getTileLocation(28, 5), myTiles.tile6)
    tiles.setTileAt(tiles.getTileLocation(28, 6), myTiles.tile6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    bat.follow(wizard, 50)
    animation.runImageAnimation(
    bat,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f . . . . . . . . . . . . . . . . . . f f . . . . . 
. . . . f c c f . . . . . c . . . . c . . . . . f c c f . . . . 
. . . . f . c c f . . . . c c . . c c . . . . f c c . f . . . . 
. . . . . . . c c f f . . c f f f f c . . f f c c . . . . . . . 
. . . . . . . . c c c f f f f f f f f f f c c c . . . . . . . . 
. . . . . . . . . . c c c f c f f c f c c c . . . . . . . . . . 
. . . . . . . . . . . c c f f f f f f c c . . . . . . . . . . . 
. . . . . . . . . . . . c f f c c f f c . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . f f f c c c c f c f f c f c c c c f f f . . . . . . 
. . . . f f c c c c c c c f f f f f f c c c c c c c f f . . . . 
. . f f c c c . . . . . c f f c c f f c . . . . . c c c f f . . 
. f c c c . . . . . . . . . f f f f . . . . . . . . . c c c f . 
. f c . . . . . . . . . . f f . . f f . . . . . . . . . . c f . 
. . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . f c f c f f c f c f . . . . . . . . . . . 
. . . . . . . . . . f c c f f f f f f c c f . . . . . . . . . . 
. . . . . . . . . f c c c f f c c f f c c c f . . . . . . . . . 
. . . . . . . . . f c . . . f f f f . . . c f . . . . . . . . . 
. . . . . . . . f c c . . f f . . f f . . c c f . . . . . . . . 
. . . . . . . . f c . . . . . . . . . . . . c f . . . . . . . . 
. . . . . . . . f c . . . . . . . . . . . . c f . . . . . . . . 
. . . . . . . f c c . . . . . . . . . . . . c c f . . . . . . . 
. . . . . . . f c . . . . . . . . . . . . . . c f . . . . . . . 
. . . . . . . f c . . . . . . . . . . . . . . c f . . . . . . . 
. . . . . . . . f . . . . . . . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c c . . c c . . . . . . . . . . . . . 
. . . . . . . . . . . . . c f f f f c . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . f f f c c c c f c f f c f c c c c f f f . . . . . . 
. . . . f f c c c c c c c f f f f f f c c c c c c c f f . . . . 
. . f f c c c . . . . . c f f c c f f c . . . . . c c c f f . . 
. f c c c . . . . . . . . . f f f f . . . . . . . . . c c c f . 
. f c . . . . . . . . . . f f . . f f . . . . . . . . . . c f . 
. . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bat2, function (sprite, otherSprite) {
    projectile.destroy()
    bat2.startEffect(effects.fire, 100)
    pause(100)
    bat2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bat1, function (sprite, otherSprite) {
    bat.destroy()
    bat.startEffect(effects.fire, 100)
    bat.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 2 . . . 5 4 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 4 5 4 2 5 5 5 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . 4 2 4 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, wizard, 200, 0)
    }
    if (controller.left.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 4 4 5 5 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 5 4 5 4 2 5 4 2 . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 5 2 . . . 4 5 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, wizard, -200, 0)
    }
    if (controller.up.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 4 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 4 5 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 4 2 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 5 4 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 4 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 4 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 4 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, wizard, 0, -200)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    wizard.vx += 100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bat1, function (sprite, otherSprite) {
    projectile.destroy()
    bat.startEffect(effects.fire, 100)
    pause(100)
    bat.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    wizard.vx = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(19, 4), false)
    tiles.setWallAt(tiles.getTileLocation(19, 5), false)
    tiles.setWallAt(tiles.getTileLocation(19, 6), false)
    tiles.setTileAt(tiles.getTileLocation(7, 1), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(19, 4), myTiles.tile6)
    tiles.setTileAt(tiles.getTileLocation(19, 5), myTiles.tile6)
    tiles.setTileAt(tiles.getTileLocation(19, 6), myTiles.tile6)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    pro = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 4 2 2 . . . . . . . . . . . 
2 2 4 4 5 2 5 4 2 . . . . . . . 
2 4 5 5 4 4 5 4 5 4 5 2 2 2 4 2 
2 4 4 4 4 5 4 4 5 2 2 5 2 2 . . 
2 2 5 5 5 4 4 4 2 . . . . . . . 
. 2 4 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, dragon, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wizard.isHittingTile(CollisionDirection.Bottom)) {
        wizard.vy = -230
    }
})
info.onLifeZero(function () {
    music.playMelody("G G E E C C C C ", 120)
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let pro: Sprite = null
let projectile: Sprite = null
let dragon: Sprite = null
let bat2: Sprite = null
let bat: Sprite = null
let wizard: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`640014000101010101010101010101010101010101010101010102131313131313010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201011b010101011919141901010101010101010101010201010101010101010101010901010101010101010101010101010213131313131301010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010102141414141413010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201011a1a19010101010101011b1b19191908191a1a1a02010101010101010101010101010202020101010101010101010102010101010113010101010101010101010101010101010101010101010101010101010101010101010101010101010101010208010101010101191908191919010101010f1a1b1b08020101010101010101080101010101010101010101010101020101020101010101130101010101010101010101010101010101010101010101010101010101010101010101010101010101010102191901011b0101011a0f1a010101010101010119191902010101010101010202020202020101010101010101010102010102010101010113010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010101011a011a1a1b1a0101010101011a1a02010101010101010101010101010101010101010101010102010102010101010102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201011919191919011a01011a1a1a010101010101010102010101010101010101010101010101010808020808080202010102010101010213020219190101010101011919190101010101010101010101010101010101010101010101010101010101010201010101010101011a1a0101010101010101010101010201010101020202020101010101010101020202020202020101010202020101010101010119010101010101190101010101010101010101010101010101010101010101010101010101010101190101011b0101011a011a1a1a1b0101010101010101010201010101010101020802020101010101010101020a01010101010101010101010101010119080808080808190101010101010101010101010101010101010101010101010101010101010101020202020202020202020202020202020202020202020202010101010101010f0f0f01010101010101010102010101010101010102020202020c0101190f0f0f0f0f0f1901010101010101010101010101010101010101010101010101010101010101170101010101010101010101010101010101010101010101020101010101010101010101020202020101010102010101010101010101010101010c01011901010101010101010101010101010101010101010101010101010101010101011a0101010117010101010101010101010101010101010101010101010101020101010101010101010101010101010201010102020808020202010101010101010c0101190101010101010101010101010101010101010101010101010101010101010101010101011701010101010101010101010101010101010101010101010101020101010101010101010101010101010101010102020f0f010101010101010101010c0101190101010101010101010101010101010101010101010101010101010101010101010101170101010101010101010101010101010101010101010101010101020101010101010101010701010101010101010101010101010101010101010101010d010119010101010101010101010101010101010101010101010101010101010101010101011701010101010101010101010101010101010101010101010101010102010101010101010101020202020202020202020101010101010101010101020202020202020101010101010101010101010101010101010101010101010101010101010101011701010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010201010101010101010101010101010101010101010101010101010101010101011701010101010101010101010101010101010101010101010101010101010201010101010101010101010101010101010101010101010101011001010101010101010102010101010101010101010101010101010101010101010101010101010101011701010101010101010101010101010101010101010101010101010101010102010101010602030205040202020202020504020302080808080802040202020502030202030402020205020204020602050202020402020202050202020203020605020204020302020202020202020202020202020202020202020202020202020202020202020202040202060202030205040202040202050202040202060502030202020402050202020602020202020203020202050202020602040202020406020202020502060206020302020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 . 2 . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . 2 2 2 . 2 . . . 2 . . . . 
. . . . . . . . . 2 2 2 . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 . 2 2 2 . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 . . . . . . . . . . 2 . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . 2 . . . 2 2 . . 2 . . . . 2 2 2 2 2 2 . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . 2 . 2 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . 2 2 2 2 . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . 2 2 . . 2 2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.floorLightMoss,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder,sprites.dungeon.greenOuterNorth0,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.collectibleInsignia,myTiles.tile7,myTiles.tile8,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast1,myTiles.tile9,myTiles.tile10,myTiles.tile11,sprites.dungeon.darkGroundSouthEast0],
            TileScale.Sixteen
        ))
wizard = sprites.create(img`
. . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 8 8 . . . . . . 5 . . . . . . . . . . 
. . . . . . . . . . . . 8 8 5 8 . . . . . . 5 5 . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . 5 . 5 4 . 5 . . . . . . 
. . . . . . . . . . . . . 8 5 8 8 8 . . . 5 4 5 4 2 . . . . . . 
. . . . . . . . . . . . . 8 8 8 5 8 . . . . 5 2 5 5 . . . . . . 
. . . . . . . . . . 8 . f f f f f f f . 8 . . 4 2 5 . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . e 2 e . . . . . . 
. . . . . . . . . . . . . d d d d d . . . . . e 2 e . . . . . . 
. . . . 4 . . . . . . . . d f d f d . . . . . e e e . . . . . . 
. . . . 5 2 . . . . . . . d e e e d . . . . . . e . . . . . . . 
. . . . . 4 4 5 . . . . . e e f e e . . . . . . e . . . . . . . 
. . . . . 5 2 4 5 . . . . 8 e e e f . . . . . . e . . . . . . . 
. . . . . . 5 4 5 . . . 8 8 8 e e 8 8 8 . . . e e . . . . . . . 
. . . . . . 4 2 2 . . 8 8 8 8 5 e e 8 8 8 . . e . . . . . . . . 
. . . . . . . 2 5 . 8 8 8 8 8 f 8 e e 8 8 8 . e . . . . . . . . 
. . . . . . . f f 8 8 8 . 8 8 5 8 8 e . 8 8 8 f f . . . . . . . 
. . . . . . . f f 8 8 . . 8 8 f 8 8 e . . 8 8 f f . . . . . . . 
. . . . . . . . . . . . e 8 8 8 8 8 . . . . . e . . . . . . . . 
. . . . . . . . . . . e e f 8 8 8 f . . . . . e e . . . . . . . 
. . . . . . . . . . e . . 8 f f f 8 . . . . . . e . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 . . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . e . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . e e . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 . . e . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 f . e . . . . . . . . 
. . . . . . . . . f f f f 8 8 8 8 8 8 f f . . e . . . . . . . . 
. . . . . . . . . . . e f f f f f f f f . . . e . . . . . . . . 
. . . . . . . . . . . e e e . . . e e e . . . . . . . . . . . . 
`, SpriteKind.Player)
wizard.setFlag(SpriteFlag.StayInScreen, true)
wizard.ay = 500
wizard.vx = 0
scene.cameraFollowSprite(wizard)
tiles.placeOnTile(wizard, tiles.getTileLocation(2, 16))
bat = sprites.create(img`
. . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . 
. . . . . . . . . f f f c f c f c f f c c f f . . . . . . . . . 
. . . . . . . . f f c c c f f f f f f c c c f . . . . . . . . . 
. . . . . . . . f c c c f f f f f f f f c c f f . . . . . . . . 
. . . . . . . . f c c c f f f f f f f f c c c f f . . . . . . . 
. . . . . . . . f c c c f f f f f f f f f c c c f f . . . . . . 
. . . . . . . f f c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c c . . . . . . 
. . . . . . . f c c c c c f f f f f f f f c c c c f . . . . . . 
. . . . . . . f f c c c c f f f f f f f c c c c c f . . . . . . 
. . . . . . . . f c c c c f f f f f f f c c c c c f . . . . . . 
. . . . . . . . f f c c c c f f f f f f c c c c f f . . . . . . 
. . . . . . . . . f f c c c f f f f f c c c c f f . . . . . . . 
. . . . . . . . . . f f c c f f f f f c c c f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . f f c f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c f c f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.bat1)
bat2 = sprites.create(img`
. . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . 
. . . . . . . . . f f f c f c f c f f c c f f . . . . . . . . . 
. . . . . . . . f f c c c f f f f f f c c c f . . . . . . . . . 
. . . . . . . . f c c c f f f f f f f f c c f f . . . . . . . . 
. . . . . . . . f c c c f f f f f f f f c c c f f . . . . . . . 
. . . . . . . . f c c c f f f f f f f f f c c c f f . . . . . . 
. . . . . . . f f c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c f . . . . . . 
. . . . . . . f c c c c f f f f f f f f f c c c c c . . . . . . 
. . . . . . . f c c c c c f f f f f f f f c c c c f . . . . . . 
. . . . . . . f f c c c c f f f f f f f c c c c c f . . . . . . 
. . . . . . . . f c c c c f f f f f f f c c c c c f . . . . . . 
. . . . . . . . f f c c c c f f f f f f c c c c f f . . . . . . 
. . . . . . . . . f f c c c f f f f f c c c c f f . . . . . . . 
. . . . . . . . . . f f c c f f f f f c c c f f . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . f f c f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c f c f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.bat2)
tiles.placeOnTile(bat, tiles.getTileLocation(9, 12))
tiles.placeOnTile(bat2, tiles.getTileLocation(29, 16))
info.setLife(99)
dragon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 1 1 . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . 1 1 . f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . f f f f f 2 2 f . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 f f f f f 2 f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . f f 1 1 1 1 1 1 f f f f f 2 2 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f 2 2 . . . . f f f f f 2 2 1 1 1 f f f 2 2 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f f f 2 2 f f f f f f f 2 f 1 1 f f f f f 2 2 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f f f f f f f f f f 2 1 f f f f f f 2 f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 1 f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 . 1 . 1 f f f f f f f f f f f f f f f f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f 2 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 f f f f f 2 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 2 . . . . . . . . . . f f f f 2 2 2 2 2 f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 2 . . . . . . . . . . . . . f f 2 2 2 f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 2 2 . 2 . . . . . . . . . . f 2 2 2 2 f f f f f f f f . . . . . . . . . . . . . . . f f . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f 2 2 f f . . . . . . . . . f 2 2 2 2 f f f f f f f f f f . . . . . . . f f . . f f f f . . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f 2 2 2 2 2 2 f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f f f . . . . . . . . . f f f f f f f f f f f f 2 2 f f . . . . . . f f f . f f 2 2 2 f . f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 2 2 2 2 2 2 f f f f f f 2 2 2 f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f . . . . . . . . . . f f 2 2 2 2 f f f f f f 2 f f . . . . . . f f 2 f f f 2 2 2 2 f f f 2 2 2 2 f . f f f f f . . . . . . . . . . . . . . f f f f f f f 2 2 2 2 2 f f f f . . . . . . f f 2 2 f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f 2 2 2 f f f f f f f f f . . . f f . . f 2 2 2 f 2 2 2 2 2 f f f 2 2 2 2 f f f 2 2 2 f . . . . . . . . . . . . f f f f f f 2 2 2 2 f f f f f . . . . . . . . . . . f 2 f f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f 2 2 2 f f f f f f f f f . . f f f . f f 2 2 f f 2 f f f f f f f f f 2 2 f f 2 2 2 2 f . . . f . . . . . . . f f f f f f 2 2 2 f f f . . . . . . . . . . . . . . . . f 2 f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f 2 f f f f f f f f f . f f 2 f . f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 f . . f f . . . . . f f f f f f 2 2 2 2 f f . . . . . . . . . . . . . . . . . . f 2 f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 2 2 2 f f f f f f 2 2 f . f 2 2 f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f f f f f . . . f f f f f f f 2 2 2 f f f . . . . . . . . . . . . . . . . . . . . 2 2 f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 2 2 2 f f f f f 2 2 2 f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f 2 2 f . . f f f f f f f 2 2 2 f f . . . . . . . . . . . . . . . . . . . . . . f 2 f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f 2 2 f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f . f f f f f f f 2 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . f 2 f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f 2 f f f . . . . . . . . . . . . . . . . . . . . . . . . . f 2 f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f . . . . . . . . . . . . . . . . . . . . . f f . . . f 2 f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 2 f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . f f f f f 2 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f 2 2 f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f 2 f f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f 2 f f 2 2 2 f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f f 2 2 f f 2 f f f f f f f 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f f 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . f f f f f f 2 f f f f f f f f f f f f 2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 f f f f f f f f f f f 2 f f f 2 2 2 2 2 f f 2 2 2 2 2 f 2 2 2 2 2 2 2 f f 2 f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 2 f . f f f f f f f f f f f 2 2 2 2 2 2 2 f 2 2 2 2 f f 2 2 2 2 f 2 2 2 2 f 2 f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 f f . . f f f f f f 2 f f f f f f f f f f f 2 2 2 f f 2 2 2 2 f f 2 2 2 2 f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f 2 f . . . f f f f f f 2 2 f . . . . . . f f f f f f f f 2 2 2 f f 2 f f f f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f 2 f . . . . f f f f f f 2 f f . . . . . . . . . . . . f f f f f f f f 2 f . f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f 2 f . . . . f f f f f f 2 2 f . . . . . . . . . . . . . . f f f f f f 2 f . f f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f f f f f f f 2 2 f f . . . . f f f f f f 2 f f . . . . . . . . . . . . f f f f f f f 2 f . f f f f f f f f f f 2 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f 2 2 2 2 2 f f f f f f 2 2 f f . . . . f f f f f f 2 2 f . . . . . . . . . . . f f f f f f f 2 f . . . f f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 1 . f f f f f f f f f f f f f f . . . . f f f f f f f 2 f . f f f f . . . . . . f f f f f f f 2 f . . . . . f f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . c c . f f 2 2 2 f f f f f f 2 2 2 f f . . . . f f f f f f 2 2 f f f 2 1 . . . . . f f f f f f 2 2 f . . . . . . . f f f f f f f f 2 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c c b b f f 1 . f f f 2 b f f f b b b 2 f f . . . . . f f f f f 2 f 2 2 c . . f f f f f f f f f f 2 f . . . . . . . . . f f f f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . c c c . c b b b b b f f 2 2 b b b b b b b b b c f . . . f f f f f f f f f b b b c f 2 2 2 f f f f f f f f f . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . c c b b c c b b b b b f 1 b b b b b b b b b b b c . . . f f 2 f f 2 f f 2 b b b b c f 1 f f f f f f f f 2 f f f . . f f 2 2 2 f f f f f f f f 2 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . c c b b b c b b b b b b b b b b b b b b b b b b b b c . f f 2 f 2 2 f f 2 2 b b b b b c c f 2 2 2 f f 2 b b b 2 f f . . 1 c f f f 2 f f 2 b b b b b 2 f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c b b b b c b b b b b b b b b b b b b b b b b b b b c c f 1 b f 2 b f f 2 b b b b b b c f f 1 b f f 1 b b b b b 1 f f c c f f 1 2 b f 2 b b b b b b b 1 f f . c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c b b b b c b b b b b b b b b b b b b b b b b b b b c c . b b f 1 b b f 1 b b b b b c c b b b b b b b b b b b b b c . c c b b b b b f 1 b b b b b b b b c c c b b b c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . c b b b c b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b c c b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b c b b b b b b b c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.dragon)
tiles.placeOnTile(dragon, tiles.getTileLocation(90, 6))
dragon.ay = 500
let dragon_tail_main = sprites.create(img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.basic)
tiles.placeOnTile(dragon_tail_main, tiles.getTileLocation(87, 6))
forever(function () {
    while (controller.right.isPressed()) {
        wizard.setImage(img`
. . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 8 8 . . . . . . 5 . . . . . . . . . . 
. . . . . . . . . . . . 8 8 5 8 . . . . . . 5 5 . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . 5 . 5 4 . 5 . . . . . . 
. . . . . . . . . . . . . 8 5 8 8 8 . . . 5 4 5 4 2 . . . . . . 
. . . . . . . . . . . . . 8 8 8 5 8 . . . . 5 2 5 5 . . . . . . 
. . . . . . . . . . 8 . f f f f f f f . 8 . . 4 2 5 . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . e 2 e . . . . . . 
. . . . . . . . . . . . . d d d d d . . . . . e 2 e . . . . . . 
. . . . . . . . . . . . . d d f d f . . . . . e e e . . . . . . 
. . . . . . . . . . . . . d d e e e . . . . . . e . . . . . . . 
. . . . . . . . . . . . . d e e f e . . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 e e f . . . . . . e . . . . . . . 
. . . . . . . . . . . 8 8 8 e e 8 f 8 8 . . . e e . . . . . . . 
. . . . . . . . . . 8 8 . 8 e 8 8 5 8 8 8 . . e . . . . . . . . 
. . . . . . . . . . 8 8 . e 8 8 8 f . 8 8 8 . e . . . . . . . . 
. . . . . . . . . . 8 8 . 8 8 8 8 5 . . 8 8 8 f f . . . . . . . 
. . . . . . . . . . f f . 8 8 8 8 f . . . 8 8 f f . . . . . . . 
. . . . . . . . . . f f . 8 8 8 8 8 . . . . . e . . . . . . . . 
. . . . . . . . . . . . . f 8 8 8 f . . . . . e e . . . . . . . 
. . . . . . . . . . . . 8 8 f f f 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 . . . . . e . . . . . . . 
. . . . . . . . f 8 8 8 8 8 8 8 8 8 8 . . . . e e . . . . . . . 
. . . . . . . . e f f 8 8 8 8 8 8 8 8 . . . . e . . . . . . . . 
. . . . . . . . e e . f f 8 8 8 8 8 f f . . . e . . . . . . . . 
. . . . . . . . e e . . . f f f f f . . . . . e . . . . . . . . 
. . . . . . . . . e e . . . . . e e . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . e e e . . . . . . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 5 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . 4 . . . . . . 
. . . . . . . . . . 8 . f f f f f f f . 8 . . . . 5 . 5 . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . 4 5 5 4 . . 
. . . . . . . . . . . . . d d d d d . . . . . . . . 5 4 2 5 . . 
. . . . . . . . . . . . . d d f d f . . . . . . . . . 5 5 2 5 . 
. . . . . . . . . . . . . d d e e e . . . . . . . . . 4 2 4 4 . 
. . . . . . . . . . . . . d e e f e . . . . . . . . . e 2 5 . . 
. . . . . . . . . . . . . 8 8 e e f . . . . . . . . e 2 e . . . 
. . . . . . . . . . . . 8 8 e e 8 f . . . . . . . . e e . . . . 
. . . . . . . . . . . 8 8 8 e 8 8 5 . . . . . . e e e . . . . . 
. . . . . . . . . . . 8 8 e 8 8 8 f . . . . e e e . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 5 8 . . e e . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 f 8 f 8 f e e . . . . . . . . . . 
. . . . . . . . . . . . f 8 f f f 8 f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 8 f e f . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . e e 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . e 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . 
. . . . . . . f f 8 8 8 8 f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . f f f f . . . e e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e e . . e e e . . . . . . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 5 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . . . . . . . . 
. . . . . . . . . . 8 . f f f f f f f . 8 . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . d d d d d . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d f d f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d e e e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d e e f e . . . . . . . 5 5 . . . . . 
. . . . . . . . . . . . . 8 8 e e f . . . . . . . . . 5 4 . . . 
. . . . . . . . . . . . 8 8 e e 8 f . . . . . . . . . 2 5 . . . 
. . . . . . . . . . . . 8 8 8 8 8 5 . . . . . . . . . 4 5 5 . . 
. . . . . . . . . . . . 8 8 8 8 8 f . . . . . . . . . 5 4 2 . . 
. . . . . . . . . . . . 8 8 8 8 f f . . . . . . . e e e 2 5 . . 
. . . . . . . . . . . . . 8 8 8 f f . . . . e e e e 2 2 5 4 . . 
. . . . . . . e e e e e e 8 8 8 8 8 e e e e e . . e e e 5 . . . 
. . . . . e e e . . . . . f 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . f 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . e f f 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . e e . f f 8 8 8 8 8 f f . . . . . . . . . . . . 
. . . . . . . . e e . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . e e . . . . . e e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e e . . . . . . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 8 8 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 5 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . 4 . . . . . . 
. . . . . . . . . . 8 . f f f f f f f . 8 . . . . 5 . 5 . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . 4 5 5 4 . . 
. . . . . . . . . . . . . d d d d d . . . . . . . . 5 4 2 5 . . 
. . . . . . . . . . . . . d d f d f . . . . . . . . . 5 5 2 5 . 
. . . . . . . . . . . . . d d e e e . . . . . . . . . 4 2 4 4 . 
. . . . . . . . . . . . . d e e f e . . . . . . . . . e 2 5 . . 
. . . . . . . . . . . . . 8 8 e e f . . . . . . . . e 2 e . . . 
. . . . . . . . . . . . 8 8 e e 8 f . . . . . . . . e e . . . . 
. . . . . . . . . . . 8 8 8 e 8 8 5 . . . . . . e e e . . . . . 
. . . . . . . . . . . 8 8 e 8 8 8 f . . . . e e e . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 5 8 . . e e . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 f 8 f 8 f e e . . . . . . . . . . 
. . . . . . . . . . . . f 8 f f f 8 f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 8 f 8 f e f . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . e e 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . e 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . 
. . . . . . . f f 8 8 8 8 f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . f f f f . . . e e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e e . . e e e . . . . . . . . . . . . . 
`)
        pause(200)
    }
})
forever(function () {
    while (controller.left.isPressed()) {
        wizard.setImage(img`
. . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . . . 8 5 8 8 . . . . . . . . . . . . 
. . . . . . . . . . 5 . . . . 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . 4 5 4 . . . 8 8 8 5 8 . . . . . . . . . . . . . 
. . . . . . . 2 5 2 5 . . . 8 5 8 8 8 . . . . . . . . . . . . . 
. . . . . . 4 5 2 4 . 8 . f f f f f f f . 8 . . . . . . . . . . 
. . . . . . e 2 e . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . e 2 e . . . . . d d d d d . . . . . . . . . . . . . 
. . . . . . e e e . . . . . f d f d d . . . . . . . . . . . . . 
. . . . . . . e . . . . . . e e e d d . . . . . . . . . . . . . 
. . . . . . . e . . . . . . e f e e d . . . . . . . . . . . . . 
. . . . . . . e . . . . . . e e e 8 8 8 . . . . . . . . . . . . 
. . . . . . . e . . . . 8 8 f e e e 8 8 8 . . . . . . . . . . . 
. . . . . . . e e . . 8 8 8 5 8 8 e e . 8 8 . . . . . . . . . . 
. . . . . . . . e . 8 8 8 . f 8 8 8 8 e 8 8 . . . . . . . . . . 
. . . . . . . f f 8 8 8 . . 5 8 8 8 8 . 8 8 . . . . . . . . . . 
. . . . . . . f f 8 8 . . . f 8 8 8 8 . f f . . . . . . . . . . 
. . . . . . . . e . . . . . 8 8 8 8 8 . f f . . . . . . . . . . 
. . . . . . . . e . . . . . f 8 8 8 f . . . . . . . . . . . . . 
. . . . . . . e e . . . . 8 8 f f f 8 8 . . . . . . . . . . . . 
. . . . . . . e . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . e . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . e . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . e . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . e e . . . . 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . 
. . . . . . . . e . . . . 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
. . . . . . . . e . . . . 8 8 8 8 8 8 8 8 f f e . . . . . . . . 
. . . . . . . . e . . . f f 8 8 8 8 8 f f . e e . . . . . . . . 
. . . . . . . . e . . . . . f f f f f . . . e e . . . . . . . . 
. . . . . . . . . . . . . . e e . . . . . e e . . . . . . . . . 
. . . . . . . . . . . . . e e e . . . . . . . . . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 5 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . . . . . . . 
. . . . . 5 . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . 
. . . . 4 . . . . . . 8 . f f f f f f f . 8 . . . . . . . . . . 
. . . 5 5 . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . 5 2 4 . . . . . . . . . d d d d d . . . . . . . . . . . . . 
. . 4 2 5 . . . . . . . . . f d f d d . . . . . . . . . . . . . 
. . 2 5 4 . . . . . . . . . e e e d d . . . . . . . . . . . . . 
. . . 2 e . . . . . . . . . e f e e d . . . . . . . . . . . . . 
. . . e 2 e . . . . . . . . e e e 8 8 . . . . . . . . . . . . . 
. . . . e e e . . . . . . . f e e e 8 8 . . . . . . . . . . . . 
. . . . . . e e . . . . . . 5 8 8 e e 8 8 . . . . . . . . . . . 
. . . . . . . e e e . . . . f 8 8 8 8 e 8 . . . . . . . . . . . 
. . . . . . . . . e e . . 8 5 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . e e f 8 f 8 f 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . f f f 8 f f f 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . f e f 8 f 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 e . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 e e . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . 
. . . . . . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . . . f f f f f f 8 8 8 8 8 f f . . . . . . . 
. . . . . . . . . . . . . e e . . . f f f f f e . . . . . . . . 
. . . . . . . . . . . . e e e . . . . . . . e e . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 5 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 . f f f f f f f . 8 . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f d f d d . . . . . . . . . . . . . 
. . . 5 . . . . . . . . . . e e e d d . . . . . . . . . . . . . 
. . 5 4 . . . . . . . . . . e f e e d . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . e e e 8 8 . . . . . . . . . . . . . 
. 5 4 5 . . . . . . . . . . f e e e 8 8 . . . . . . . . . . . . 
. 4 5 2 . . . . . . . . . . 5 8 8 e e 8 . . . . . . . . . . . . 
. . 4 5 . . . . . . . . . . f 8 8 8 8 e . . . . . . . . . . . . 
. . 5 2 e e e . . . . . . . f f 8 8 8 8 . . . . . . . e e . . . 
. . . 4 2 2 e e e e . . . . f f 8 8 8 . . e e e e e e e . . . . 
. . . . e e e . . e e e e e 8 8 8 8 8 e e e . . . . . . . . . . 
. . . . . . . . . . . . . . f 8 8 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 f f e . . . . . . . . 
. . . . . . . . . . . . f f 8 8 8 8 8 f f . e e . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . e e . . . . . . . . 
. . . . . . . . . . . . . . e e . . . . . e e . . . . . . . . . 
. . . . . . . . . . . . . e e e . . . . . . . . . . . . . . . . 
`)
        pause(200)
        wizard.setImage(img`
. . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 8 8 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 5 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 5 8 . . . . . . . . . . . . . 
. . . . . 5 . . . . . . . . 8 5 8 8 8 . . . . . . . . . . . . . 
. . . . 4 . . . . . . 8 . f f f f f f f . 8 . . . . . . . . . . 
. . . 5 5 . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . 5 2 4 . . . . . . . . . d d d d d . . . . . . . . . . . . . 
. . 4 2 5 . . . . . . . . . f d f d d . . . . . . . . . . . . . 
. . 2 5 4 . . . . . . . . . e e e d d . . . . . . . . . . . . . 
. . . 2 e . . . . . . . . . e f e e d . . . . . . . . . . . . . 
. . . e 2 e . . . . . . . . e e e 8 8 . . . . . . . . . . . . . 
. . . . e e e . . . . . . . f e e e 8 8 . . . . . . . . . . . . 
. . . . . . e e . . . . . . 5 8 8 e e 8 8 . . . . . . . . . . . 
. . . . . . . e e e . . . . f 8 8 8 8 e 8 . . . . . . . . . . . 
. . . . . . . . . e e . . 8 5 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . e e f 8 f 8 f 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . f f f 8 f f f 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . f e f 8 f 8 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 f f f 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 e . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 e e . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . 
. . . . . . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . . . f f f f f f 8 8 8 8 8 f f . . . . . . . 
. . . . . . . . . . . . . e e . . . f f f f f e . . . . . . . . 
. . . . . . . . . . . . e e e . . . . . . . e e . . . . . . . . 
`)
        pause(200)
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        pause(500)
        wizard.ay = 500
    }
})
