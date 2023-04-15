"use strict"

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state <= 0) {
            this._state = 0;
        } else if (state >= 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";

    }

}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";

    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if(book[type] === value) {
                return book
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (book === null) {
            return book;
        }
        return this.books.splice(this.books.indexOf(book), 1) && book;
    }

}

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (subject in this.marks) {
            this.marks[subject].push(mark);
        } else {
            this.marks[subject] = [mark];
        }
    }

	getAverageBySubject(subject) {
		if (Object.keys(this.marks).includes(subject) === false) {
			return 0;
		}
		else {
			return (this.marks[subject].reduce((a, b) => a + b, 0)) / this.marks[subject].length
		}
	}

	getAverage() {
		return (Object.keys(this.marks).reduce((a, b) => a + this.getAverageBySubject(b), 0)) / Object.keys(this.marks).length;
	}
}


