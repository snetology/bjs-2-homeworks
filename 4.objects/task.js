function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Марья", "женский", 22);
let student2 = new Student("Bdf", "мужской", 61);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.excluded) {
		delete this.marks;
	} else {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	return this.marks.reduce((acc, item) => acc + item / this.marks.length, 0);
}

Student.prototype.exclude = function(reason) {
	if (this.excluded = reason) {
		delete this.subject;
		delete this.marks;
	};
}

function testCase() {
	student1.setSubject("Algebra");
	console.log(student1.getAverage()); // 0
	student1.addMarks(4, 5, 4, 5);
	console.log(student1.getAverage()); // 4.5
	console.log(student1);

	let student2 = new Student("Артём", "мужской", 25);
	student2.setSubject("Geometry");
	student2.exclude('плохая учёба')
	console.log(student2)
}

testCase();