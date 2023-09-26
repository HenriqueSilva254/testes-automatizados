import calculator from "calculator";

describe("Funções Matematicas", () => {
    it("returns 3 for 2 and 1 params", () => {
		const resultado = calculator.sum(2, 1);   
        expect(resultado).toEqual(3);
    });
    
    it("returns 1 for 2 and 1 params", () => {
		const resultado = calculator.sub(2, 1);   
        expect(resultado).toEqual(1);
    });
    
    it("returns 2 for 10 and 5 params", () => {
		const resultado = calculator.div(10, 5);   
        expect(resultado).toEqual(2);
    });
    
    it("returns 8 for 4 and 2 params", () => {
		const resultado = calculator.mul(4, 2);   
        expect(resultado).toEqual(8);
    });
});