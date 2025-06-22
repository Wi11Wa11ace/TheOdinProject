const library = [];

function Book(title, id, author, pages, read) {
    if(!new.target) {
        throw Error("Book must be called with new");
    }

    this.title = title;
    this.id = id;
    this.author = author;
    this.pages = pages;
    this.read = read;

    console.log(`Book ${this.title} created (ID ${this.id}).`);

    this.info = function() {
        return `${this.id}: ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read=false) {
    const book = new Book(title, crypto.randomUUID(), author, pages, read);
    library.push(book);
    console.log(`Book ${title} added to library.`);
}

function displayBooks() {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i].title);
    }
}

addBookToLibrary("test1", "me", 100);
addBookToLibrary("test2", "me", 100);
addBookToLibrary("3test", "me", 100);

displayBooks();