class Library {
    #books = [];

    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Initial book list contains duplicates");
        }
        this.#books = [...initialBooks];
    }

    get allBooks() {
        return [...this.#books];
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Book "${title}" already exists in the library`);
        }
        this.#books.push(title);
        return this;
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Book "${title}" not found in the library`);
        }
        this.#books.splice(index, 1);
        return this;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования
try {
    const library = new Library(["Book 1", "Book 2"]);
    console.log(library.allBooks);
    
    library.addBook("Book 3");
    console.log(library.allBooks);
    
    library.removeBook("Book 1");
    console.log(library.allBooks);
    
    console.log(library.hasBook("Book 2"));
    console.log(library.hasBook("Book 4"));
    
    library.addBook("Book 2");
} catch (error) {
    console.error(error.message);
}