const Author = require('./author')
const Reader = require('./reader')
const colors = require('colors')
const db = require('./database')

const Author1 = new Author('Tolkien')
const Reader1 = new Reader('Oruchan')

Author1.Publish('The Lord of The Rings')
Author1.Publish("Hobbits")
Reader1.Reading("LOTR")
Author1.PublishedBooks()
Reader1.AddLibrary("Hobbits")
Reader1.AddLibrary("LOTR")