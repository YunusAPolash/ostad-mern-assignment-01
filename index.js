function multiplicationTable(num) {
    // Checking The Type and Number if it's not a integer number it's help to get out from this functions. 
    // The First Conditions it's check the type of the input value.
    // The second Conditions it's check it a Integer or not.
    if (typeof num !== 'number' || num % 1 !== 0) {
        return console.log("Error: oho, You may gives wrong value. Please check your input it must be an integer number.") ;
    }

    // After checking, if everythings is okay. then we move to the Looping part. 
    for (let i = 1; i <= 10; i++) {
      let product = num * i;
      console.log(num + " x " + i + " = " + product);
    }
  }

//   You can enter any Integer number under the functions it will print result at console.
  multiplicationTable(5);