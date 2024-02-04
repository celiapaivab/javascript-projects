let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()

// let getfirstInitials = function (n) {
//     return n.slice(0, 1);
// };

// let firstInitials = names.map(getfirstInitials);


let firstInitials = names.map(function (n) {
    return n.slice(0, 1);
});

console.log(firstInitials);

