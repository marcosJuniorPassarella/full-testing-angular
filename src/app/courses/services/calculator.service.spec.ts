import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe(CalculatorService.name, () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    console.log('calling before each');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerSpy);
  });

  it('should add two numbers', () => {
    console.log('calling first each');

    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    // número de vezes que o serviço foi chamado
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    console.log('calling second each');

    const calcularServiceInstance = new CalculatorService(new LoggerService());
    const result = calcularServiceInstance.subtract(2, 2);
    expect(result).toBe(0);
  });
});
