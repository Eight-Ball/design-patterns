import AFactory from 'ts/AbstractFactory/AFactory'
import AProductA from 'ts/AbstractFactory/AProductA'
import AProductB from 'ts/AbstractFactory/AProductB'
import ProductA1 from 'ts/AbstractFactory/ProductA1'
import ProductB1 from 'ts/AbstractFactory/ProductB1'

export default class Factory1 extends AFactory {
  createProductA(): AProductA {
    return new ProductA1()
  }

  createProductB(): AProductB {
    return new ProductB1()
  }
}
