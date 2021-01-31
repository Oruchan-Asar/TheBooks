const colors = require('colors')

class Reader {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.library = []
    }

    Reading(bookName) {
        console.log(`${colors.green(this.firstName)} is reading ${colors.red(bookName)} right now.`);
    }
    
    AddLibrary(bookName) {
        this.library.push(bookName)
        console.log(`${colors.green(this.firstName)}'s library includes this book: ${colors.red.underline(this.library)}`);
    }
}

module.exports = Reader