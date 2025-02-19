tiles.setCurrentTilemap(tilemap`level2`)
let SIGMA = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f f 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . f f f 2 2 2 2 2 f f 2 f . . 
    . f f 2 2 2 f 2 2 f 2 2 2 f f . 
    . f 2 2 2 2 f 2 f f 2 2 2 2 f . 
    . . 2 2 2 f f 2 f 2 2 2 2 f . . 
    . . . 2 2 2 2 2 2 2 2 2 f . . . 
    . . 2 2 f f 2 2 2 f 2 f 2 2 . . 
    . . 2 2 2 f f 2 f f 2 f 2 2 . . 
    . . 2 2 f 2 f f f 2 2 f 2 2 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SIGMA)
scene.cameraFollowSprite(SIGMA)
