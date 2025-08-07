class ToDoItem {
    constructor(title) {
        this.title = title;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getTitle() {
        return this.title;
    }
}

class ToDoList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getItems() {
        return this.items;
    }
}

const toDoList = new ToDoList();

function addItemToList(event) {
    event.preventDefault();
    const titleInput = document.getElementById('todo-input');
    const title = titleInput.value.trim();
    if (title === '') {
        alert('Please enter a title for the to-do item.');
        return;
    }
    titleInput.value = '';
    titleInput.focus();
    const item = new ToDoItem(title);
    toDoList.addItem(item);
    renderList();
}

function renderList() {
    const listContainer = document.getElementById('todo-list');
    listContainer.innerHTML = '';

    toDoList.getItems().forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = item.getTitle();
        listContainer.appendChild(itemElement);
    });
}