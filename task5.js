// Loop through an object and print the key-value pairs with their types

// Input:

   let myObject = {

      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
   };
   for(let key in myObject){
      let type =typeof myObject[key];
      console.log("key:", key, "|"," type:", type);
   }

   // key: name | type:  string
//    for (let key in myObject) {
//       let valueType = typeof myObject[key];
//       console.log(`key: ${key} | type: ${valueType}`);
//   }