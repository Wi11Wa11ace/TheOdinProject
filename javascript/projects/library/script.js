const library = [];

const clearButton = document.querySelector(".clearbutton");
const newBookForm = document.querySelector(".newbookform");
const containerDiv = document.querySelector(".container");
const createBookButton = document.querySelector(".createbook");

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

function newBook(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.elements['name'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const read = form.elements['read'].value == 'on' ? true : false;

    addBookToLibrary(title, author, pages, read);

    form.reset();
}

function addBookToLibrary(title, author, pages, read=false) {
    const uuid = crypto.randomUUID();
    const book = new Book(title, uuid, author, pages, read);
    library.push(book);
    console.log(`Book ${title} added to library.`);
    displayBook(uuid);
}

function displayBook(uuid) {
    for(let i = 0; i < library.length; i++) {
        if(library[i].id == uuid) {
            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `<p>${library[i].title}</p>
                             <p class="delete" data-uuid="${uuid}" onclick="deleteBook(this)">X</p>`;
            containerDiv.appendChild(div);
        }
    }
}

function deleteBook(element) {
    bookUuid = element.dataset.uuid;

    for(let i = 0; i < library.length; i++) {
        if(library[i].id == bookUuid) {
            element.parentElement.remove();
        }
    }
}

clearButton.onclick = function () {
    newBookForm.reset();
};

addBookToLibrary("test1", "me", 100);
addBookToLibrary("test2", "me", 100);
addBookToLibrary("3test", "me", 100);
addBookToLibrary("test3", "me", 100);
addBookToLibrary("test5", "me", 100);
addBookToLibrary("39est", "me", 100);
addBookToLibrary("t5t1", "me", 100);
addBookToLibrary("te6t2", "me", 100);
addBookToLibrary("3t8t", "me", 100);
addBookToLibrary("t654t3", "me", 100);
addBookToLibrary("t65t5", "me", 100);
addBookToLibrary("35st", "me", 100);