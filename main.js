'use strict';
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isValid() {
        // Перевірка на ненульові та додатні сторони
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            return false;
        }
        // Перевірка умови існування трикутника
        return (this.a + this.b > this.c) &&
               (this.a + this.c > this.b) &&
               (this.b + this.c > this.a);
    }

    calculateArea() {
        const s = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return area;
    }
}

document.getElementById('calculateButton').addEventListener('click', () => {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    const triangle = new Triangle(sideA, sideB, sideC);

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        errorDiv.textContent = 'Please enter correct sides.';
        return;
    }

    if (!triangle.isValid()) {
        errorDiv.textContent = 'Triangle with such sides does not exist.';
    } else {
        const area = triangle.calculateArea();
        resultDiv.textContent = `Triangle area: ${area.toFixed(2)}`;
    }
});
