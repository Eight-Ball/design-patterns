import {print} from 'ts/helper'

export default class Singleton {
  private static _instance: Singleton

  private constructor() {
    //
  }

  public static get instance(): Singleton {
    if (!this._instance) {
      Singleton._instance = new Singleton()
      print('Singleton: create singleton')

    } else {
      print('Singleton: reuse singleton')
    }

    return Singleton._instance
  }
}
