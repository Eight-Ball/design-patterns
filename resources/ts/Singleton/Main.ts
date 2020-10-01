import ADesignPattern from 'ts/ADesignPattern.ts'
import {print} from 'ts/helper'
import Singleton from 'ts/Singleton/Singleton'

export default class Main extends ADesignPattern {
  name = 'Singleton'

  public init(): void {
    super.init()

    print('Main: get singleton')
    Singleton.instance

    print('Main: get singleton another time')
    Singleton.instance
  }
}
