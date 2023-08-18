/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object 
 * describes a book and has properties for the title (string), author (string), 
 * and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by 
 * J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you 
 * read it yet or not. If you read it, log a string like You already read "The Hobbit" 
 * right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
let arr = [{title:'Catcher In The Rye',author:'J.D.Salinger',alreadyRead:true},
{title:'The Hobbit',author:'R.R.Tolkien',alreadyRead:false},
{title:'Le Petit Prince',author:'Antoine de Saint-Exupéry',alreadyRead:true}];


for(book of arr){
    let sentence = `${book.title} by ${book.author} 
    ${book.alreadyRead?'Already Read':'Need to read'} ${book.title}\n`

    console.log(sentence);

}