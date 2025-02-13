class EstonianID {
    private idCode: string;

    constructor(idCode: string) {
        if (!this.isValidIDCode(idCode)) {
            throw new Error("Invalid Estonian ID code");
        }
        this.idCode = idCode;
    }

    private isValidIDCode(idCode: string): boolean {
        return /^\d{11}$/.test(idCode);
    }

    getGender(): string {
        const genderDigit = parseInt(this.idCode.charAt(0), 10);
        return genderDigit % 2 === 0 ? "Female" : "Male";
    }

    getBirthDate(): Date {
        const centuryCode = parseInt(this.idCode.charAt(0), 10);
        const year = (centuryCode <= 2 ? 1800 : centuryCode <= 4 ? 1900 : 2000) + parseInt(this.idCode.substring(1, 3), 10);
        const month = parseInt(this.idCode.substring(3, 5), 10) - 1;
        const day = parseInt(this.idCode.substring(5, 7), 10);
        return new Date(year, month, day);
    }

    getAge(): number {
        const birthDate = this.getBirthDate();
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Example usage with various input data:
const ids = [
    new EstonianID("39501234215"),
    new EstonianID("60101019906"),
    new EstonianID("49807234215"),
    new EstonianID("50303039914")
];

ids.forEach(id => {
    console.log(`ID Code: ${id['idCode']}`);
    console.log(`Gender: ${id.getGender()}`);
    console.log(`Birth Date: ${id.getBirthDate().toISOString().split('T')[0]}`);
    console.log(`Age: ${id.getAge()}`);
    console.log('---');
});