/**
 * The Strategy Pattern defines a family of algorithms,
 * encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from
 * clients that use it.
 */

/**
 * Abstract Duck class
 */
abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  swin() {}

  display() {}

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  setFlyBehaviour(newFlyBehavior: FlyBehavior) {
    this.flyBehavior = newFlyBehavior;
  }

  setQuackBehavior(newQuackBehavior: QuackBehavior) {
    this.quackBehavior = newQuackBehavior;
  }
}

/**
 * Fly Behavior
 */
interface FlyBehavior {
  fly(): void;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('Flying with wings');
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('Flying is not possible');
  }
}

/**
 * Quack Behavior
 */
interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  quack() {
    console.log('Quack Quack Quack');
  }
}

class Squeak implements QuackBehavior {
  quack() {
    console.log('Squuuuuuuueak');
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log("I won't make a sound");
  }
}

/**
 * Ducks
 */
class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log("I'm a Mullard duck");
  }
}

const mallard: Duck = new MallardDuck();
mallard.performQuack();
mallard.performFly();
