import AProductA from 'ts/AbstractFactory/AProductA'
import AProductB from 'ts/AbstractFactory/AProductB'


export default abstract class AFactory {
  abstract createProductA(): AProductA;

  abstract createProductB(): AProductB;
}
