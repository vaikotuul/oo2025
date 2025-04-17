// 1. Põhiklassid
abstract class LibraryEntity {
    abstract getInfo(): string;
}

class Book extends LibraryEntity {
    constructor(
        public readonly isbn: string,
        public title: string,
        public author: string,
        public publicationYear: number,
        public availableCopies: number,
        public totalCopies: number
    ) {
        super();
    }

    getInfo(): string {
        return `${this.title} by ${this.author} (${this.publicationYear}) - ${this.availableCopies}/${this.totalCopies} available`;
    }
}

class LibraryMember extends LibraryEntity {
    constructor(
        public readonly memberId: string,
        public name: string,
        public email: string,
        public joinDate: Date,
        public borrowedBooks: BorrowedBook[] = []
    ) {
        super();
    }

    getInfo(): string {
        return `${this.name} (ID: ${this.memberId}) - ${this.borrowedBooks.length} books borrowed`;
    }
}

// 2. Laenutamise süsteem
class BorrowedBook {
    constructor(
        public book: Book,
        public borrowDate: Date,
        public dueDate: Date,
        public returned: boolean = false
    ) {}

    getInfo(): string {
        return `${this.book.title} - Due: ${this.dueDate.toDateString()} ${this.returned ? '(Returned)' : ''}`;
    }
}

class LibraryTransaction extends LibraryEntity {
    constructor(
        public transactionId: string,
        public member: LibraryMember,
        public book: Book,
        public transactionDate: Date,
        public transactionType: 'BORROW' | 'RETURN' | 'RENEW'
    ) {
        super();
    }

    getInfo(): string {
        return `[${this.transactionId}] ${this.transactionType} - ${this.book.title} by ${this.member.name}`;
    }
}

// 3. Raamatukogu klass
class Library {
    private books: Book[] = [];
    private members: LibraryMember[] = [];
    private transactions: LibraryTransaction[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    registerMember(member: LibraryMember): void {
        this.members.push(member);
    }

    borrowBook(memberId: string, isbn: string): void {
        const member = this.members.find(m => m.memberId === memberId);
        const book = this.books.find(b => b.isbn === isbn);

        if (!member || !book) {
            throw new Error("Member or book not found");
        }

        if (book.availableCopies <= 0) {
            throw new Error("No available copies of this book");
        }

        const borrowDate = new Date();
        const dueDate = new Date();
        dueDate.setDate(borrowDate.getDate() + 30);

        member.borrowedBooks.push(new BorrowedBook(book, borrowDate, dueDate));
        book.availableCopies--;

        this.transactions.push(new LibraryTransaction(
            `TXN-${Date.now()}`,
            member,
            book,
            borrowDate,
            'BORROW'
        ));
    }

    returnBook(memberId: string, isbn: string): void {
        const member = this.members.find(m => m.memberId === memberId);
        const book = this.books.find(b => b.isbn === isbn);

        if (!member || !book) {
            throw new Error("Member or book not found");
        }

        const borrowedBook = member.borrowedBooks.find(bb => 
            bb.book.isbn === isbn && !bb.returned
        );

        if (!borrowedBook) {
            throw new Error("Book not borrowed by this member");
        }

        borrowedBook.returned = true;
        book.availableCopies++;

        this.transactions.push(new LibraryTransaction(
            `TXN-${Date.now()}`,
            member,
            book,
            new Date(),
            'RETURN'
        ));
    }

    searchBooks(query: string): Book[] {
        const lowerQuery = query.toLowerCase();
        return this.books.filter(book => 
            book.title.toLowerCase().includes(lowerQuery) || 
            book.author.toLowerCase().includes(lowerQuery) ||
            book.isbn.includes(query)
        );
    }

    getMemberInfo(memberId: string): LibraryMember | undefined {
        return this.members.find(m => m.memberId === memberId);
    }

    getTransactionHistory(): LibraryTransaction[] {
        return [...this.transactions].reverse();
    }

    getMembers(): LibraryMember[] {
        return this.members;
    }
}

// 4. UI ja rakenduse käivitamine
class LibraryApp {
    private library: Library;

    constructor() {
        this.library = new Library();
        this.initializeSampleData();
        this.setupEventListeners();
    }

    private initializeSampleData(): void {
        // Lisame mõned näidandraamatud
        this.library.addBook(new Book("978-3-16-148410-0", "Clean Code", "Robert C. Martin", 2008, 3, 5));
        this.library.addBook(new Book("978-0-13-235088-4", "Design Patterns", "Erich Gamma", 1994, 2, 3));
        this.library.addBook(new Book("978-0-321-58472-6", "The Pragmatic Programmer", "Andrew Hunt", 1999, 1, 2));

        // Lisame mõned näidiskasutajad
        this.library.registerMember(new LibraryMember("M001", "Mari Maasikas", "mari@example.com", new Date()));
        this.library.registerMember(new LibraryMember("M002", "Jaan Jõesaar", "jaan@example.com", new Date()));
    }

    private setupEventListeners(): void {
        // Tabide vahetamine
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                if (tabId) {
                    const tabContent = document.getElementById(tabId);
                    if (tabContent) {
                        tabContent.classList.add('active');
                    }
                }
            });
        });

        // Raamatute otsing
        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        const bookResults = document.getElementById('bookResults');

        if (searchButton && searchInput && bookResults) {
            searchButton.addEventListener('click', () => {
                const query = searchInput.value;
                const results = this.library.searchBooks(query);
                
                bookResults.innerHTML = '';
                results.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book-item';
                    bookElement.innerHTML = `
                        <h3>${book.title}</h3>
                        <p>Autor: ${book.author}</p>
                        <p>Aasta: ${book.publicationYear}</p>
                        <p>Saadaval: ${book.availableCopies}/${book.totalCopies}</p>
                        <button class="borrow-btn" data-isbn="${book.isbn}">Laenuta</button>
                    `;
                    bookResults.appendChild(bookElement);
                });

                // Laenutamisnuppude seadistamine
                document.querySelectorAll('.borrow-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const target = e.target as HTMLElement;
                        const isbn = target.getAttribute('data-isbn');
                        if (isbn) {
                            this.borrowBookPrompt(isbn);
                        }
                    });
                });
            });
        }

        // Laenutajate kuvamine
        this.displayMembers();

        // Tehingute kuvamine
        this.displayTransactions();
    }

    private displayMembers(): void {
        const memberList = document.getElementById('memberList');
        if (memberList) {
            memberList.innerHTML = '';
            this.library.getMembers().forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.className = 'member-item';
                memberElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>ID: ${member.memberId}</p>
                    <p>Email: ${member.email}</p>
                    <p>Liitunud: ${member.joinDate.toLocaleDateString()}</p>
                    <p>Laenutatud raamatuid: ${member.borrowedBooks.length}</p>
                `;
                memberList.appendChild(memberElement);
            });
        }
    }

    private displayTransactions(): void {
        const transactionList = document.getElementById('transactionList');
        if (transactionList) {
            transactionList.innerHTML = '';
            this.library.getTransactionHistory().forEach(transaction => {
                const transactionElement = document.createElement('div');
                transactionElement.className = 'transaction-item';
                transactionElement.innerHTML = `
                    <p><strong>${transaction.transactionType}</strong></p>
                    <p>Raamat: ${transaction.book.title}</p>
                    <p>Laenutaja: ${transaction.member.name}</p>
                    <p>Kuupäev: ${transaction.transactionDate.toLocaleString()}</p>
                `;
                transactionList.appendChild(transactionElement);
            });
        }
    }

    private borrowBookPrompt(isbn: string): void {
        const memberId = prompt("Sisesta oma laenutaja ID (M001 või M002):");
        if (memberId) {
            try {
                this.library.borrowBook(memberId, isbn);
                alert("Raamat laenutatud edukalt!");
                this.displayTransactions();
                const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
                if (searchButton) {
                    searchButton.click();
                }
            } catch (error) {
                alert(`Viga: ${(error as Error).message}`);
            }
        }
    }
}

// Rakenduse käivitamine lehe laadimisel
document.addEventListener('DOMContentLoaded', () => {
    new LibraryApp();
});