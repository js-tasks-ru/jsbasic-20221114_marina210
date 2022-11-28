function sumSalary(salaries) {
 let sumSal = 0;
 for (key in salaries) {
      console.log(salaries[key]);
    if (salaries[key] && typeof(salaries[key])==='number' && !(salaries[key]===Infinity || salaries[key]===-Infinity)){
      sumSal += salaries[key];
    }
      
 }
 return sumSal;
}
