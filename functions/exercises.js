//Rectangles

//makeLine(size) function
function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++){
        line = line + "#"
    }
    return(line);
}

console.log(makeLine(5));


//makeSquare(size) function
// function makeSquare(size){
//     let square = "";
//     for (let i = 0; i < size; i++){
//         square += (makeLine(size) +"\n")
//     }    
//     return(square.slice(0, -1));
// }

// console.log(makeSquare(3));


//makeRectangle(width, height) function
// function makeRectangle(width, height){
//     let rectangue = "";
//     for (k = 0; k < height; k++){
//         rectangue = "\n" + makeLine(width) + rectangue
//     }    
//     return(rectangue);
// }

// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }
// console.log(makeRectangle(5,3));

//Triangles

// makeDownwardStairs(height) function
// function makeDownwardStairs(height) {
//     let triangle = "";
//     for (let i = 0; i < height; i++) {
//       triangle += (makeLine(height).slice(0, (i+1)) + '\n');
//     }
//     return triangle.slice(0, -1);
//   }

// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//       stairs += (makeLine(i+1) + '\n');
//     }
//     return stairs.slice(0, -1);
// }
// console.log(makeDownwardStairs(4));


// makeSpaceLine(numSpaces, numChars) function
function makeSpaceLine(numSpaces, numChars) {
    let space = "";
    let char = "";
    for (let i = 0; i < numSpaces; i++){
        space += " ";
    }
    for (i = 0; i < numChars; i++){
        char += "#";
    }
    let spaceLine = space + char + space;
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));

// makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height) {
    let isosceles = ""
    for (let i = 0; i < height; i++){
        isosceles += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    } 
    return isosceles.slice(0, -1);
}

// function makeIsoscelesTriangle(height) {
//     let triangle = '';
//     for (let i = 0; i < height; i++) {
//       triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
//     }
//     return triangle.slice(0, -1);
//   }
console.log(makeIsoscelesTriangle(5));

// Diamonds

// makeDiamond(height) function
// function(){
    
// }