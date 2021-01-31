function checkingUserInput() {
   // validation 
    var countryName = prompt("Where are you from?");
    while (countryName !== 'jordan' && countryName !== 'palestine') {
        countryName = prompt("Where are you from?");
    }




    if (countryName == 'jordan' || countryName == 'palestine') {
        var yourName = prompt('What is your name?');
        alert("welcome " + yourName + " You're in the rigth place");
    } else {
        alert("Sorry, we're just located in Jordan and Palestine");
    }

    // using for loop to show multiple images
    var numOfPhones = prompt("How many phones you wanna buy from our store?");
    for (var i = 1; i <= numOfPhones; i++) {
        document.write(i,'<img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535944" width=\'300\'/>');
    }
}

// using conditionals and functions to execute a specific action a certain number of times
function printStars() {
    var numOfStars = prompt("How many Stars dou you wantto be printed?");
    for (var i = 1; i <= numOfStars; i++) {
        document.write('<h5>', "*", '</h5>');
    }
}

// calling checkingUserInput function
checkingUserInput();
document.write("\n");
document.write('<b>', "Amman - Jordan", '</b>');

document.write("\n");
document.write("\n");
printStars();