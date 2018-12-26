export abstract class Enemy {
    abstract startCountDown(n : number): void;
    abstract act(): void;
}




// startCountDown(seconds: number){
//     var counter = seconds;
//     var interval = setInterval(() => {
//         //console.log(counter);
//         counter--;
//         if (counter < 0 ) {
            
//             // code here will run when the counter reaches zero.
            
//             //clearInterval(interval);
//             counter = this.entity.maxStamina;
//             this.act();
//         }	
//     }, 1000);
// }