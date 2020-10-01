import AFactory from 'ts/AbstractFactory/AFactory'
import AProductA from 'ts/AbstractFactory/AProductA'
import AProductB from 'ts/AbstractFactory/AProductB'
import ProductA2 from 'ts/AbstractFactory/ProductA2'
import ProductB2 from 'ts/AbstractFactory/ProductB2'

export default class Factory2 extends AFactory {
  createProductA(): AProductA {
    return new ProductA2()
  }

  createProductB(): AProductB {
    return new ProductB2()
  }
}
