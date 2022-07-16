import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe(CalculatorService.name, () => {
  it('should add two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    // vc pode utilizar para enviar como retorno um mock de dados
    //logger.log.and.returnValue();
    const calcularServiceInstance = new CalculatorService(logger);
    const result = calcularServiceInstance.add(2, 2);
    expect(result).toBe(4);
    // número de vezes que o serviço foi chamado
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    const calcularServiceInstance = new CalculatorService(new LoggerService());
    const result = calcularServiceInstance.subtract(2, 2);
    expect(result).toBe(0);
  });
});
