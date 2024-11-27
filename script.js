const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitBookBtn = document.querySelector(".submit-book");
const tbody = document.querySelector("tbody");
const myLibrary = [
    {
        title: "Random book",
        author: "Authorify",
        page: "3921039120",
    }
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showData() {
    for (let i=0; i<myLibrary.length;i++) {
        const tr = document.createElement("tr"); 
        tbody.appendChild(tr);
        let ele = myLibrary[i];
    
        for (let key in ele) {
            const td = document.createElement("td");
            td.innerText = ele[key];
            tr.appendChild(td);
        }
    }
    
}

showData();
showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

submitBookBtn.addEventListener("click", (e) => {
    let title = document.querySelector(".title-input");
    let author = document.querySelector(".author-input");
    let pages = document.querySelector(".pages-input");

    let book = new Book(title.value, author.value, pages.value);
    addBookToLibrary(book);
    tbody.innerHTML = '';
    showData();
    e.preventDefault();
});