//works! hids all but the last four digits of a numberstring
// function maskify(cc) {
//   function maskify(cc) {
//  // cc = cc.split('');
//   console.log(cc);
//   if(cc.length > 4){
//     let show = cc.slice(cc.length-4);
//     let hide = cc.slice(0,cc.length-4);
//     console.log(show);
//     hide.replace(/[0-9a-zA-Z]/g, "X");
//     return(hide.replace(/[0-9]/g, "#").concat(show));
//   }
//   else{return cc;}
// }
//
// maskify('3333394949494499493');
//
//   }
// }
//



//X's and O's works!
// function XO(str) {
//  console.log(str.indexOf('o'));
//
//     if(str.indexOf('x') === -1  && str.indexOf('o') === -1){
//      console.log('yup');
//      return true;
//     }
//     else if(str.indexOf('x') === -1  || str.indexOf('o') === -1){
//      console.log('yup almost');
//      return false;
//     }
//     else if(str.match(/x/gi).length === str.match(/o/gi).length) {
//       console.log('yippy');
//       return true;
//
//     }
// else {
//      return false;
// }
//
// }
//
// XO('oO');
