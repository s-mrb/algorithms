// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let p1 = 0;
//     let leftBrackets = [];
//     if(s.length < 1) {
//         return true;
//     }
//     if(s.length === 1) {
//         return false;
//     }
//     while(p1 < s.length){
//         if(s[p1] === "{" || s[p1] === "(" || s[p1] === "[") {
//             leftBrackets.push(s[p1]);
//         } else {
//             let lastLeftBracket = leftBrackets.pop();
//             if(s[p1] === "}") {
//                 if(lastLeftBracket !== "{") {
//                     return false;    
//                 }
//             } else if(s[p1] === ")" ) {
//                 if(lastLeftBracket !== "(") {
//                     return false;    
//                 }
//             } else if(s[p1] === "]") {
//                 if(lastLeftBracket !== "[") {
//                     return false;    
//                 }
//             }
//         }
//         p1++;
//     }
//     if(!leftBrackets.length) {
//         return true;
//     } else {
//         return false;
//     }
// };






















