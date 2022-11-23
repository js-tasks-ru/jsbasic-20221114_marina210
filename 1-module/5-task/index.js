function truncate(str, maxlength) {
  if (!str) return '';
  let str1 = ''; 
  if (str.length > maxlength) {
    str1 = `${str.slice(0,maxlength-1)}…`;
  } else {
    str1 = str.slice(0,maxlength-1);
  }
   return str1;
}
