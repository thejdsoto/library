const myLibrary = [
    {
        title: "Random book",
        author: "Authorify",
        page: "3921039120",
    }
];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.status = function(isRead) {
        if (this.isRead) {
            return "already read";
        } else {
            return "not read yet";
        }
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status(this.isRead)}`;
    }
}

function addBookToLibrary() {
    // do stuff here
}

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', false);
// console.log(theHobbit.info());

// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// showButton.addEventListener("click", () => {
//     dialog.showModal();
// })

// closeButton.addEventListener("click", () => {
//     dialog.close();
// })

for (let i=0; i<myLibrary.length;i++) {
    const tr = document.createElement("tr");
    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
    let ele = myLibrary[i];

    for (let key in ele) {
        const td = document.createElement("td");
        td.innerText = ele[key];
        tr.appendChild(td);
    }
}

// console.log(myLibrary);