import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe(CalculatorService.name, () => {
  it('should add two numbers', () => {
    const calcularServiceInstance = new CalculatorService(new LoggerService());
    const result = calcularServiceInstance.add(2, 2);
    expect(result).toBe(4);
  });

  it('should substract two numbers', () => {
    const calcularServiceInstance = new CalculatorService(new LoggerService());
    const result = calcularServiceInstance.subtract(2, 2);
    expect(result).toBe(0);
  });
});
