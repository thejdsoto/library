class Library {
    #myLibrary = [
        {
            title: "test_title",
            author: "test_author",
            pages: "test_pages",
            isRead: "test_isRead"
        }
    ];

    addBook(book) {
        this.#myLibrary.push(book);
    }

    removeBook(i) {
        console.log(`removebook happens`);
        this.#myLibrary.splice(i, 1);
    }

    showBooks() {
        DOMController.displayData(this.#myLibrary);
    }
}

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class EventListener {
    static showDialog() {
        const dialog = document.querySelector("dialog");
        const showButton = document.querySelector("dialog + button");
        
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });
    }

    static closeDialog() {
        const dialog = document.querySelector("dialog");
        const closeButton = document.querySelector("dialog button");
        closeButton.addEventListener("click", () => {
            dialog.close();
        });
    }

    static loadBooks() {
        window.addEventListener("load", () => {
            let library = new Library();
            library.showBooks();
            EventListener.showDialog();
            EventListener.closeDialog();
            EventListener.submitBook(library);
            EventListener.deleteBook(library);
        });
    }

    static submitBook(library) {
        const submitBookBtn = document.querySelector(".submit-book");
        submitBookBtn.addEventListener("click", (e) => {
            let title = document.querySelector(".title-input");
            let author = document.querySelector(".author-input");
            let pages = document.querySelector(".pages-input");
            let readStatus = document.querySelector(".read-status-input")
        
            let book = new Book(title.value, author.value, pages.value, readStatus.value);
            library.addBook(book);
            DOMController.clearTableBody();
            library.showBooks();
            EventListener.deleteBook(library);
            e.preventDefault();
        });
    }

    static deleteBook(library) {
        const delBtn = document.querySelectorAll("td button");
        delBtn.forEach((e) => {
            e.addEventListener("click", () => {
                library.removeBook(e.dataset.idx);
                DOMController.clearTableBody();
                library.showBooks();
                EventListener.deleteBook(library);
            });
        })
    }
}

class DOMController {
    static displayData(data) {
        for (let i=0; i<data.length;i++) {
            const tr = document.createElement("tr");
            const delBtn = document.createElement("button");
            const deleteTd = document.createElement("td");
            const tbody = document.querySelector("tbody");
            tbody.appendChild(tr);
            let ele = data[i];
        
            for (let key in ele) {
                const td = document.createElement("td");
                
                
                td.innerText = ele[key];
                delBtn.innerText = "Delete";
                delBtn.setAttribute('data-idx', i);
                tr.appendChild(td);
            }
            deleteTd.appendChild(delBtn);
            tr.appendChild(deleteTd);
        }
    }

    static clearTableBody() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = '';
    }
}

EventListener.loadBooks();