abstract class Isik {
    constructor(public nimi: string) {}
    abstract tegevus(): void;
}

class Kasutaja extends Isik {
    private laenutatudRaamatud: Raamat[] = [];

    tegevus(): void {
        console.log(`${this.nimi} saab raamatuid laenutada ja tagastada.`);
    }

    laenutaRaamat(raamat: Raamat): void {
        if (raamat.saadavus) {
            raamat.laenuta();
            this.laenutatudRaamatud.push(raamat);
            console.log(`${this.nimi} laenutas raamatu: ${raamat.pealkiri}`);
        } else {
            console.log(`${raamat.pealkiri} ei ole saadaval.`);
        }
    }

    tagastaRaamat(raamat: Raamat): void {
        const index = this.laenutatudRaamatud.indexOf(raamat);
        if (index > -1) {
            raamat.tagasta();
            this.laenutatudRaamatud.splice(index, 1);
            console.log(`${this.nimi} tagastas raamatu: ${raamat.pealkiri}`);
        } else {
            console.log(`${this.nimi} ei ole seda raamatut laenutanud.`);
        }
    }
}

abstract class Teos {
    constructor(public pealkiri: string, public autor: string) {}
}

class Raamat extends Teos {
    constructor(pealkiri: string, autor: string, public saadavus: boolean = true) {
        super(pealkiri, autor);
    }

    laenuta(): void {
        this.saadavus = false;
    }

    tagasta(): void {
        this.saadavus = true;
    }
}

class Raamatukogu {
    private raamatud: Raamat[] = [];
    private kasutajad: Kasutaja[] = [];

    lisaRaamat(raamat: Raamat): void {
        this.raamatud.push(raamat);
    }

    registreeriKasutaja(kasutaja: Kasutaja): void {
        this.kasutajad.push(kasutaja);
    }

    saadavalRaamatud(): Raamat[] {
        return this.raamatud.filter(raamat => raamat.saadavus);
    }

    renderRaamatud(): void {
        const output = document.getElementById("output");
        if (!output) return;

        output.innerHTML = "<h2>Saadaval olevad raamatud:</h2>";
        this.raamatud.forEach(raamat => {
            const raamatDiv = document.createElement("div");
            raamatDiv.textContent = `${raamat.pealkiri} - ${raamat.autor} (${raamat.saadavus ? "Saadaval" : "Laenutatud"})`;
            if (raamat.saadavus) {
                const laenutaButton = document.createElement("button");
                laenutaButton.textContent = "Laenuta";
                laenutaButton.onclick = () => {
                    kasutaja1.laenutaRaamat(raamat);
                    this.renderRaamatud();
                };
                raamatDiv.appendChild(laenutaButton);
            } else {
                const tagastaButton = document.createElement("button");
                tagastaButton.textContent = "Tagasta";
                tagastaButton.onclick = () => {
                    kasutaja1.tagastaRaamat(raamat);
                    this.renderRaamatud();
                };
                raamatDiv.appendChild(tagastaButton);
            }
            output.appendChild(raamatDiv);
        });
    }

    renderLaenutatudRaamatud(): void {
        const output = document.getElementById("output");
        if (!output) return;

        output.innerHTML = "<h2>Laenutatud raamatud:</h2>";
        this.kasutajad.forEach(kasutaja => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `<strong>${kasutaja.nimi}:</strong>`;
            const borrowedBooks = (kasutaja as any).laenutatudRaamatud as Raamat[];
            if (borrowedBooks.length > 0) {
                borrowedBooks.forEach(raamat => {
                    const bookDiv = document.createElement("div");
                    bookDiv.textContent = `${raamat.pealkiri} - ${raamat.autor}`;
                    userDiv.appendChild(bookDiv);
                });
            } else {
                userDiv.innerHTML += " Ei ole laenutatud raamatuid.";
            }
            output.appendChild(userDiv);
        });
    }

    setupUI(): void {
        const addBookButton = document.getElementById("addBook");
        const registerUserButton = document.getElementById("registerUser");

        addBookButton?.addEventListener("click", () => {
            const title = prompt("Sisesta raamatu pealkiri:");
            const author = prompt("Sisesta raamatu autor:");
            if (title && author) {
                const newBook = new Raamat(title, author);
                this.lisaRaamat(newBook);
                alert(`Raamat "${title}" lisatud.`);
            }
        });

        registerUserButton?.addEventListener("click", () => {
            const name = prompt("Sisesta kasutaja nimi:");
            if (name) {
                const newUser = new Kasutaja(name);
                this.registreeriKasutaja(newUser);
                alert(`Kasutaja "${name}" registreeritud.`);
            }
        });

        const showBorrowedBooksButton = document.getElementById("showBorrowedBooks");
        showBorrowedBooksButton?.addEventListener("click", () => {
            this.renderLaenutatudRaamatud();
        });
    }
}

// Näide kasutusest
const library = new Raamatukogu();
const book1 = new Raamat("The Hunger Games", "Suzanne Collins");
const book2 = new Raamat("Dune", "Frank Herbert");
const book3 = new Raamat("The Lord of the Rings", "J.R.R. Tolkien");

library.lisaRaamat(book1);
library.lisaRaamat(book2);
library.lisaRaamat(book3);

const kasutaja1 = new Kasutaja("Mari");
const kasutaja2 = new Kasutaja("Jaan");

library.registreeriKasutaja(kasutaja1);
library.registreeriKasutaja(kasutaja2);

document.getElementById("showBooks")?.addEventListener("click", () => {
    library.renderRaamatud();
});

library.setupUI();
