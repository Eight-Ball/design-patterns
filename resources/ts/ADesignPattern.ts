import {print} from 'ts/helper'

export default abstract class ADesignPattern {
  protected abstract name: string

  public init(): void {
    this.printHeader()
  }

  protected printHeader(): void {
    print('----------------------------------------')
    print(this.name)
    print('----------------------------------------')
  }
}
