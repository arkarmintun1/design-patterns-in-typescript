/**
 * Singleton Pattern ensures a class only
 * has one instance and provide a global
 * point of access to it
 */
class ChocolateBoiler {
  private static _instance: ChocolateBoiler;
  private _empty: boolean;
  private _boiled: boolean;

  private constructor() {
    this._empty = true;
    this._boiled = false;
  }

  static getInstance() {
    if (this._instance === null) {
      this._instance = new ChocolateBoiler();
    }
    return this._instance;
  }

  isEmpty(): boolean {
    return this._empty;
  }

  isBoiled(): boolean {
    return this._boiled;
  }

  fill(): void {
    if (this.isEmpty()) {
      this._empty = false;
      this._boiled = false;
    }
  }

  drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this._empty = true;
    }
  }

  boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this._boiled = true;
    }
  }
}
