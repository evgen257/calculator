class Main {
    static calc(input) {
        try {
            const [operand1, operator, operand2] = input.split(" ");
            const num1 = this.parseNumber(operand1);
            const num2 = this.parseNumber(operand2);
            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = Math.floor(num1 / num2);
                    break;
            }
        } catch (error) {
            return "throws Exception";
        }
    }
    static parseNumber(str) {
        const arabicRegex = /^[1-9]|10$/;
        if (arabicRegex.test(str)) {
            return parseInt(str);
        } else {
            throw new Error("Неподходящее число");
        }
    }
    static isRoman(str) {
        const romanRegex = /^(I|II|III|IV|V|VI|VII|VIII|IX|X)$/;
        return romanRegex.test(str);
    }
    static toRoman(num) {
        const romanNumerals = {
            1: "I",
            4: "IV",
            5: "V",
            9: "IX",
            10: "X"
        };
        let result = "";
        for (let value in romanNumerals) {
            while (num >= value) {
                result += romanNumerals[value];
                num -= value;
            }
        }
        return result;
    }
}
