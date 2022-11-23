function ucFirst(str) {
   let str1 = '';
   if (str) {
    str1 = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return str1; 
   } else {
     return '';
   }
}
