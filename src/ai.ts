import { Entity } from "./entity";

export class Ai {
    speed:number ;
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
        this.entity.move(Math.random()+1, Math.random()+1, this.entity._map);
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


