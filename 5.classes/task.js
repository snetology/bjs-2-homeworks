class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = 1.5 * this.state;
	}

	set state(currentState) {
		if (currentState < 0) {
			this.currentState = 0;
		} else if (currentState > 100) {
			this.currentState = 100;
		} else {
			this.currentState = currentState;
		}
	}

	get state() {
		return this.currentState;
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
		return this.books.find(book => book[type] === value) || null;
	}


	giveBookByName(bookName) {
		let desiredBook = this.books.find(book => book.name === bookName);
		if (desiredBook === undefined) {
			return null;
		}
		return this.books.splice(desiredBook, 1)[0];
	}


}

class Student {
	marks = {};

	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
	}

	addMark(mark, discipline) {
		if (mark < 1 || mark > 5) {
			return console.log('Ошибка, оценка должна быть числом от 1 до 5');
		} else if (this.marks[discipline] != undefined) {
			this.marks[discipline].push(mark);
		} else {
			this.addDiscipline(discipline);
			this.marks[discipline].push(mark);
		}
	}

	addDiscipline(discipline) {
		this.marks[discipline] = [];
	}

	getAverageBySubject(discipline) {
		if (this.marks?.hasOwnProperty(discipline) === true && this.marks[discipline].length > 0) {
			let sum = this.marks[discipline].reduce((acc, item) => acc + item, 0);
			return sum / this.marks[discipline].length
		} else if (this.marks?.hasOwnProperty(discipline) === true && this.marks[discipline].length === 0) {
			return console.log('Нет оценок');
		} else {
			return 0;
		}
	}

	getAverage() {
		let length = 0;
		let sum = 0;
		for (let key in this.marks) {
			sum += this.marks[key].reduce((acc, item) => acc + item, 0);
			length += this.marks[key].length;
		}
		return Object.keys(this.marks).length === 0 ? 0 : sum / length
	}

	exclude(reason) {
		delete this.marks;
		this.excluded = reason;
		console.log(reason);
	}
}