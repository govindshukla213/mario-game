const canvas = document.querySelector('canvas');
const c =canvas.getContext('2d');
console.log(c);

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// canvas.width = 500
// canvas.height = 200
const gravity = 0.5

const keys = {
    right : {
        presssed : false
    },
    left : {
        presssed : false
    }
}
class Player {

    constructor(){

        this.position = {
            x : 100 ,
            y : 100
        }
        this.velocity = {
            x : 0,
            y : 1
        }
        this.width = 30
        this.height = 30
    }
//  Drawing object 
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height);   
    }

// Updating positions
    update() {
        this.position.y+=this.velocity.y
        this.position.x+=this.velocity.x
        
        // if(this.position.x+this.width+this.velocity.x < canvas.width ) {
        //     this.velocity.x += gravity

        // }else {
        //     this.velocity.x = 0
        // }

       // y condition to not cross window
        if(this.position.y+this.height+this.velocity.y < canvas.height) {
            this.velocity.y += gravity

        }else {
            this.velocity.y = 0
        }
        this.draw()
    }

}


class Platform {

     constructor() {
         this.position = {
            x : 200 ,
            y : 100
         }
         this.width = 200
         this.height = 20     
     }

     draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x,this.position.y,this.width ,this.height)
     }
}


const player = new Player()

const platform = new Platform()

player.update(); 

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height) 
    player.update()
    platform.draw()

    if(keys.right.presssed){
        player.velocity.x = 5
    }else if (keys.left.presssed ) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
    }

    
}
animate()

addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch( keyCode )  {

        case 65 : 
            console.log('left')
            keys.left.presssed =true

            break
        
        case 68 : 
            console.log('right')
            keys.right.presssed = true
            break

        case 87 : 
            console.log('up')
            player.velocity.y -= 10
            break
        
        case 83 : 
            console.log('down')
            break
    }
})


addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch( keyCode )  {

        case 65 : 
            console.log('left')
            keys.left.presssed = false
            break
        
        case 68 : 
            console.log('right')
            keys.right.presssed = false
            break

        case 87 : 
            console.log('up')
            player.velocity.y = 0
            break
        
        case 83 : 
            console.log('down')
            break
    }
})