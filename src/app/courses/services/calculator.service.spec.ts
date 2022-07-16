import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe(CalculatorService.name, () => {
  it('should add two numbers', () => {
    const logger = new LoggerService();
    spyOn(logger, 'log');
    const calcularServiceInstance = new CalculatorService(logger);
    const result = calcularServiceInstance.add(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    const calcularServiceInstance = new CalculatorService(new LoggerService());
    const result = calcularServiceInstance.subtract(2, 2);
    expect(result).toBe(0);
  });
});
