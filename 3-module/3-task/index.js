function camelize(str) {
    let arr = str.split('');
 let y = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '-') {
        y = 1;
       continue;
     } else {
       if (y === 1) {    // признак того, что пред.символ - тире
        arr[i] = arr[i].toUpperCase() ;
        y = 0;
      } 
     }
     
   }
   
return arr
   .join('')
   .split('-')
   .join('')
}
