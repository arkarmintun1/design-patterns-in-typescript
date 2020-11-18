/**
 * The Decorator Pattern attaches additional responsibilities to
 * an object dynamically. Decorators provide a flexible alternative
 * to subclassing for extending functionality.
 */
abstract class Beverage {
  description: string = 'Unknown Beverage';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  cost(): number {
    return 0.89;
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark Roast Coffee';
  }

  cost(): number {
    return 0.99;
  }
}

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf';
  }

  cost(): number {
    return 1.05;
  }
}

class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class SteamedMilk extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Steamed Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }
  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

const beverage = new Espresso();
console.log(`Espresso: $${beverage.cost()}, ${beverage.getDescription()}`);

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`Dark Roast: $${beverage2.cost()}, ${beverage2.getDescription()}`);
