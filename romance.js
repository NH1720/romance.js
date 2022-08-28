
// Returns the passed in string without punctuaction, uppercase letters, or numbers 
//  I definetly had to look this up, I had no idea how to do this one. I now have a basic understanding of what 
// .replace is doing here

function deconstruct(string) {
    return string.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ');
    }

// console.log(parseText('po ud pj($( &YHOI UY $*Ob uy54860 87 fcu$^%GGIOiu yjt iu^$*hf ur u'));

let test = 'po ud pj($( &YHOI UY $*Ob uy54860 87 fcu$^%GGIOiu yjt iu^$*hf ur u'


// takes in an array of words and creates an object whose keys are the unique words of the array and the values are all of the words that follow the all the instances of that unique word 

// I got halfway through this one and could not figure it out
function generateChain(chain) {
    let markovChain = {};
    let words = deconstruct(chain);

    for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    let nextWord = words[i+1];
    
    return markovChain;
}
}

function random(ranWord) {
    let rando = Math.floor(Math.random() * ranWord.length);
    return ranWord[rando];
}

function writeLine(object, n) {

}


console.log(generateChain(test));