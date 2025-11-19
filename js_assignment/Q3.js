// Q3: Library Management
class Book {
  constructor(title, author, isbn, isIssued=false){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }
  issueBook(){
    this.isIssued = true;
  }
  returnBook(){
    this.isIssued = false;
  }
}

const books = [
  new Book("Book A", "Author A", "111"),
  new Book("Book B", "Author B", "222", true),
  new Book("Book C", "Author C", "333")
];

console.log("Available books:", books.filter(b => !b.isIssued));
