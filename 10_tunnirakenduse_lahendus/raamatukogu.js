var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Põhiklassid
var LibraryEntity = /** @class */ (function () {
    function LibraryEntity() {
    }
    return LibraryEntity;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(isbn, title, author, publicationYear, availableCopies, totalCopies) {
        var _this = _super.call(this) || this;
        _this.isbn = isbn;
        _this.title = title;
        _this.author = author;
        _this.publicationYear = publicationYear;
        _this.availableCopies = availableCopies;
        _this.totalCopies = totalCopies;
        return _this;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, " (").concat(this.publicationYear, ") - ").concat(this.availableCopies, "/").concat(this.totalCopies, " available");
    };
    return Book;
}(LibraryEntity));
var LibraryMember = /** @class */ (function (_super) {
    __extends(LibraryMember, _super);
    function LibraryMember(memberId, name, email, joinDate, borrowedBooks) {
        if (borrowedBooks === void 0) { borrowedBooks = []; }
        var _this = _super.call(this) || this;
        _this.memberId = memberId;
        _this.name = name;
        _this.email = email;
        _this.joinDate = joinDate;
        _this.borrowedBooks = borrowedBooks;
        return _this;
    }
    LibraryMember.prototype.getInfo = function () {
        return "".concat(this.name, " (ID: ").concat(this.memberId, ") - ").concat(this.borrowedBooks.length, " books borrowed");
    };
    return LibraryMember;
}(LibraryEntity));
// 2. Laenutamise süsteem
var BorrowedBook = /** @class */ (function () {
    function BorrowedBook(book, borrowDate, dueDate, returned) {
        if (returned === void 0) { returned = false; }
        this.book = book;
        this.borrowDate = borrowDate;
        this.dueDate = dueDate;
        this.returned = returned;
    }
    BorrowedBook.prototype.getInfo = function () {
        return "".concat(this.book.title, " - Due: ").concat(this.dueDate.toDateString(), " ").concat(this.returned ? '(Returned)' : '');
    };
    return BorrowedBook;
}());
var LibraryTransaction = /** @class */ (function (_super) {
    __extends(LibraryTransaction, _super);
    function LibraryTransaction(transactionId, member, book, transactionDate, transactionType) {
        var _this = _super.call(this) || this;
        _this.transactionId = transactionId;
        _this.member = member;
        _this.book = book;
        _this.transactionDate = transactionDate;
        _this.transactionType = transactionType;
        return _this;
    }
    LibraryTransaction.prototype.getInfo = function () {
        return "[".concat(this.transactionId, "] ").concat(this.transactionType, " - ").concat(this.book.title, " by ").concat(this.member.name);
    };
    return LibraryTransaction;
}(LibraryEntity));
// 3. Raamatukogu klass
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
        this.transactions = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.borrowBook = function (memberId, isbn) {
        var member = this.members.find(function (m) { return m.memberId === memberId; });
        var book = this.books.find(function (b) { return b.isbn === isbn; });
        if (!member || !book) {
            throw new Error("Member or book not found");
        }
        if (book.availableCopies <= 0) {
            throw new Error("No available copies of this book");
        }
        var borrowDate = new Date();
        var dueDate = new Date();
        dueDate.setDate(borrowDate.getDate() + 30);
        member.borrowedBooks.push(new BorrowedBook(book, borrowDate, dueDate));
        book.availableCopies--;
        this.transactions.push(new LibraryTransaction("TXN-".concat(Date.now()), member, book, borrowDate, 'BORROW'));
    };
    Library.prototype.returnBook = function (memberId, isbn) {
        var member = this.members.find(function (m) { return m.memberId === memberId; });
        var book = this.books.find(function (b) { return b.isbn === isbn; });
        if (!member || !book) {
            throw new Error("Member or book not found");
        }
        var borrowedBook = member.borrowedBooks.find(function (bb) {
            return bb.book.isbn === isbn && !bb.returned;
        });
        if (!borrowedBook) {
            throw new Error("Book not borrowed by this member");
        }
        borrowedBook.returned = true;
        book.availableCopies++;
        this.transactions.push(new LibraryTransaction("TXN-".concat(Date.now()), member, book, new Date(), 'RETURN'));
    };
    Library.prototype.searchBooks = function (query) {
        var lowerQuery = query.toLowerCase();
        return this.books.filter(function (book) {
            return book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery) ||
                book.isbn.includes(query);
        });
    };
    Library.prototype.getMemberInfo = function (memberId) {
        return this.members.find(function (m) { return m.memberId === memberId; });
    };
    Library.prototype.getTransactionHistory = function () {
        return __spreadArray([], this.transactions, true).reverse();
    };
    Library.prototype.getMembers = function () {
        return this.members;
    };
    return Library;
}());
// 4. UI ja rakenduse käivitamine
var LibraryApp = /** @class */ (function () {
    function LibraryApp() {
        this.library = new Library();
        this.initializeSampleData();
        this.setupEventListeners();
    }
    LibraryApp.prototype.initializeSampleData = function () {
        // Lisame mõned näidandraamatud
        this.library.addBook(new Book("978-3-16-148410-0", "Clean Code", "Robert C. Martin", 2008, 3, 5));
        this.library.addBook(new Book("978-0-13-235088-4", "Design Patterns", "Erich Gamma", 1994, 2, 3));
        this.library.addBook(new Book("978-0-321-58472-6", "The Pragmatic Programmer", "Andrew Hunt", 1999, 1, 2));
        // Lisame mõned näidiskasutajad
        this.library.registerMember(new LibraryMember("M001", "Mari Maasikas", "mari@example.com", new Date()));
        this.library.registerMember(new LibraryMember("M002", "Jaan Jõesaar", "jaan@example.com", new Date()));
    };
    LibraryApp.prototype.setupEventListeners = function () {
        var _this = this;
        // Tabide vahetamine
        var tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                document.querySelectorAll('.tab-button').forEach(function (btn) { return btn.classList.remove('active'); });
                document.querySelectorAll('.tab-content').forEach(function (content) { return content.classList.remove('active'); });
                button.classList.add('active');
                var tabId = button.getAttribute('data-tab');
                if (tabId) {
                    var tabContent = document.getElementById(tabId);
                    if (tabContent) {
                        tabContent.classList.add('active');
                    }
                }
            });
        });
        // Raamatute otsing
        var searchButton = document.getElementById('searchButton');
        var searchInput = document.getElementById('searchInput');
        var bookResults = document.getElementById('bookResults');
        if (searchButton && searchInput && bookResults) {
            searchButton.addEventListener('click', function () {
                var query = searchInput.value;
                var results = _this.library.searchBooks(query);
                bookResults.innerHTML = '';
                results.forEach(function (book) {
                    var bookElement = document.createElement('div');
                    bookElement.className = 'book-item';
                    bookElement.innerHTML = "\n                        <h3>".concat(book.title, "</h3>\n                        <p>Autor: ").concat(book.author, "</p>\n                        <p>Aasta: ").concat(book.publicationYear, "</p>\n                        <p>Saadaval: ").concat(book.availableCopies, "/").concat(book.totalCopies, "</p>\n                        <button class=\"borrow-btn\" data-isbn=\"").concat(book.isbn, "\">Laenuta</button>\n                    ");
                    bookResults.appendChild(bookElement);
                });
                // Laenutamisnuppude seadistamine
                document.querySelectorAll('.borrow-btn').forEach(function (btn) {
                    btn.addEventListener('click', function (e) {
                        var target = e.target;
                        var isbn = target.getAttribute('data-isbn');
                        if (isbn) {
                            _this.borrowBookPrompt(isbn);
                        }
                    });
                });
            });
        }
        // Laenutajate kuvamine
        this.displayMembers();
        // Tehingute kuvamine
        this.displayTransactions();
    };
    LibraryApp.prototype.displayMembers = function () {
        var memberList = document.getElementById('memberList');
        if (memberList) {
            memberList.innerHTML = '';
            this.library.getMembers().forEach(function (member) {
                var memberElement = document.createElement('div');
                memberElement.className = 'member-item';
                memberElement.innerHTML = "\n                    <h3>".concat(member.name, "</h3>\n                    <p>ID: ").concat(member.memberId, "</p>\n                    <p>Email: ").concat(member.email, "</p>\n                    <p>Liitunud: ").concat(member.joinDate.toLocaleDateString(), "</p>\n                    <p>Laenutatud raamatuid: ").concat(member.borrowedBooks.length, "</p>\n                ");
                memberList.appendChild(memberElement);
            });
        }
    };
    LibraryApp.prototype.displayTransactions = function () {
        var transactionList = document.getElementById('transactionList');
        if (transactionList) {
            transactionList.innerHTML = '';
            this.library.getTransactionHistory().forEach(function (transaction) {
                var transactionElement = document.createElement('div');
                transactionElement.className = 'transaction-item';
                transactionElement.innerHTML = "\n                    <p><strong>".concat(transaction.transactionType, "</strong></p>\n                    <p>Raamat: ").concat(transaction.book.title, "</p>\n                    <p>Laenutaja: ").concat(transaction.member.name, "</p>\n                    <p>Kuup\u00E4ev: ").concat(transaction.transactionDate.toLocaleString(), "</p>\n                ");
                transactionList.appendChild(transactionElement);
            });
        }
    };
    LibraryApp.prototype.borrowBookPrompt = function (isbn) {
        var memberId = prompt("Sisesta oma laenutaja ID (M001 või M002):");
        if (memberId) {
            try {
                this.library.borrowBook(memberId, isbn);
                alert("Raamat laenutatud edukalt!");
                this.displayTransactions();
                var searchButton = document.getElementById('searchButton');
                if (searchButton) {
                    searchButton.click();
                }
            }
            catch (error) {
                alert("Viga: ".concat(error.message));
            }
        }
    };
    return LibraryApp;
}());
// Rakenduse käivitamine lehe laadimisel
document.addEventListener('DOMContentLoaded', function () {
    new LibraryApp();
});
