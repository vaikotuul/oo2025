interface calculatingFunction{
    calculate(x:number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class inchesToCM implements calculatingFunction{
    calculate(x:number): number{
        return x*2.54;
    }
    inputUnit(): string{
        return "inches";
    }
    outputUnit(): string{
        return "cm";
    }
}

class cmToInches implements calculatingFunction{
    calculate(x:number): number{
        return x/2.54;
    }
    inputUnit(): string{
        return "cm";
    }
    outputUnit(): string{
        return "inches";
    }
}