import ADesignPattern from 'ts/ADesignPattern.ts'
import AFactory from 'ts/AbstractFactory/AFactory'
import Factory1 from 'ts/AbstractFactory/Factory1'
import {print} from 'ts/helper'
// import Factory2 from 'ts/AbstractFactory/Factory2'

export default class Main extends ADesignPattern {
  name = 'Abstract Factory'

  public init(): void {
    super.init()

    this.clientCode(new Factory1())

    // this.clientCode(new Factory2())
  }

  clientCode(factory: AFactory): void {
    const productA = factory.createProductA()
    print(productA.doSomething())

    const productB = factory.createProductB()
    print(productB.doSomethingCrazy())
  }
}
