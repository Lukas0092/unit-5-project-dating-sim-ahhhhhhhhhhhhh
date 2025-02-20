namespace SpriteKind {
    export const Date = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 0
        Y = -50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Date, function (sprite, otherSprite) {
    game.showLongText("Welcome to the dating sim! Try to rizz all the huzz you can", DialogLayout.Bottom)
    pause(100)
    tiles.placeOnRandomTile(Mc, assets.tile`myTile`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mc, X, Y)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = -50
        Y = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 50
        Y = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 0
        Y = 50
    }
})
let projectile: Sprite = null
let Y = 0
let X = 0
let Speed = 0
let Mc: Sprite = null
tiles.setCurrentTilemap(tilemap`level7`)
Mc = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f f f f f . 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    f d e d d d d d d e d f 
    f d d 1 f d d f 1 d d f 
    f e d d d d d d d d e f 
    . f e d d b b d d e f . 
    . f f e d d d d e f f . 
    1 1 f b 1 1 1 1 b f 1 1 
    1 1 f 1 1 1 1 1 1 f 1 1 
    d d f 6 6 6 6 6 6 f d d 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
Mc.setPosition(78, 89)
let Natsuki = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f b 3 3 3 3 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 e e 3 3 3 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f 3 b f b f e e f b f 3 b f . 
    . f 3 b e 1 f 4 4 f 1 e 3 b f . 
    f f b b f 4 4 4 4 4 4 f b 3 f f 
    f 3 b f f f e e e e f f f 3 b f 
    . f e e f b c c c c b f e e f . 
    . . e 4 c c c c c c c c 4 e . . 
    . . e f b c b c b c b b f e . . 
    . . . f f c c c d c d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Date)
controller.moveSprite(Mc)
scene.cameraFollowSprite(Mc)
