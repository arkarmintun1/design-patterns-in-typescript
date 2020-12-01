/**
 * The Adapter Pattern converts the interface of a class
 * into another interface the client expect. Adapter lets
 * classes work together that couldn't otherwise because
 * of incompatible interfaces.
 */
interface Duck {
  quack(): void;
  fly(): void;
}

class MallardDuck implements Duck {
  quack(): void {
    console.log('QUACK!!');
  }
  fly(): void {
    console.log('FLY!!!');
  }
}

interface Turkey {
  gobble(): void;
  fly(): void;
}

class WildTurkey implements Turkey {
  gobble(): void {
    console.log('GOBBLE!!!');
  }
  fly(): void {
    console.log('FLY SHORT DISTANCE!!!');
  }
}

class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

const turkey: Turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

console.log('As a turkey');
turkey.gobble();
turkey.fly();

console.log('As a duck');
turkeyAdapter.quack();
turkeyAdapter.fly();
