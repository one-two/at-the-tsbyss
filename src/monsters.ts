import { Entity } from "./entity";
import { randint } from "./helper/randint";

export class Fungi {
    speed: number;
    entity: Entity;

    constructor(speed:number = 0) {
        if (speed > 0) {
        }
    }

    startCountDown(seconds: number){
        var counter = seconds;
        var interval = setInterval(() => {
            //console.log(counter);
            counter--;
            if (counter < 0 ) {
                
                // code here will run when the counter reaches zero.
                
                //clearInterval(interval);
                counter = this.entity.maxStamina;
                this.act();
            }	
        }, 1000);
    }

    act() {
        console.log(randint(-1, 1))
        let dy = randint(-1,1);
        let dx = randint(-1,1);
        this.entity.move(dx, dy, this.entity._map);
    }


}

// // An asynchronous timer  
// function startCountDown(seconds: number){
// 	var counter = seconds;
// 	var interval = setInterval(() => {
// 		console.log(counter);
// 		counter--;
// 		if (counter < 0 ) {
			
// 			// code here will run when the counter reaches zero.
			
// 			clearInterval(interval);
// 			console.log('Ding!');
// 		}	
// 	}, 1000);
// }

// startCountDown(10);
// console.log('que')
// console.log('que')

// startCountDown(30);

// console.log('que')


