let num = 101;
let count= 0;

while(count < 50){
    let primo = true;
    let i = 2;

    while(i * i <= num && primo){
        if(num % i === 0){
            primo = false;
        }
            i++;
        }

        if(primo){
            console.log(num);
            count++;
        }
num++;
}