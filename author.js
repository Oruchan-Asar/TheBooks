const colors = require('colors')

class Author {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.publishedBooks = []
    }

    Publish(bookName) {
        console.log(`The ${colors.red(bookName)} is successfully published by ${colors.blue(this.firstName)}.`);
        this.publishedBooks.push(bookName)   
    }
    
    PublishedBooks() {
        console.log(`${colors.blue(this.firstName)} has published this books: ${colors.red.underline(this.publishedBooks)}.`);
    }
}

module.exports = Author