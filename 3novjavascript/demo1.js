const add = (value1, value2) =>{
        console.log('add() function called')
        return (value1) +(value2);
    }
    const average = (value1, value2) => {
        console.log('average() function called')
        return add(value1,value2)/2;
    }
    console.log(`Calculating Average of two numbers`);
    let number1 = 30;
    let number2 = 55;
    console.log(`Number 1 : ${number1}`);
    console.log(`Number 2 : ${number2}`);
    let avg = average(number1, number2);
    console.log(`Average is ${avg}`);
    