const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitBookBtn = document.querySelector(".submit-book");
const tbody = document.querySelector("tbody");
const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showData() {
    for (let i=0; i<myLibrary.length;i++) {
        const tr = document.createElement("tr");
        const delBtn = document.createElement("button");
        const deleteTd = document.createElement("td");
        tbody.appendChild(tr);
        let ele = myLibrary[i];
    
        for (let key in ele) {
            const td = document.createElement("td");
            
            
            td.innerText = ele[key];
            delBtn.innerText = "Delete";
            
            tr.appendChild(td);
        }
        deleteTd.appendChild(delBtn);
        tr.appendChild(deleteTd);

        delBtn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            delBtn.parentElement.parentElement.innerHTML = '';
        });
    }
}

showData();
showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

submitBookBtn.addEventListener("click", (e) => {
    let title = document.querySelector(".title-input");
    let author = document.querySelector(".author-input");
    let pages = document.querySelector(".pages-input");
    let readStatus = document.querySelector(".read-status-input")

    let book = new Book(title.value, author.value, pages.value, readStatus.value);
    addBookToLibrary(book);
    tbody.innerHTML = '';
    showData();
    e.preventDefault();
});