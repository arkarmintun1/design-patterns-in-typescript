/**
 *
 */
interface Pizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

class CheesePizza implements Pizza {
  prepare(): void {
    console.log('Cheese Pizza: prepare');
  }
  bake(): void {
    console.log('Cheese Pizza: bake');
  }
  cut(): void {
    console.log('Cheese Pizza: cut');
  }
  box(): void {
    console.log('Cheese Pizza: box');
  }
}

class PepperoniPizza implements Pizza {
  prepare(): void {
    console.log('Pepperoni Pizza: prepare');
  }
  bake(): void {
    console.log('Pepperoni Pizza: bake');
  }
  cut(): void {
    console.log('Pepperoni Pizza: cut');
  }
  box(): void {
    console.log('Pepperoni Pizza: box');
  }
}

class ClamPizza implements Pizza {
  prepare(): void {
    console.log('Clam Pizza: prepare');
  }
  bake(): void {
    console.log('Clam Pizza: bake');
  }
  cut(): void {
    console.log('Clam Pizza: cut');
  }
  box(): void {
    console.log('Clam Pizza: box');
  }
}

class VeggiePizza implements Pizza {
  prepare(): void {
    console.log('Veggie Pizza: prepare');
  }
  bake(): void {
    console.log('Veggie Pizza: bake');
  }
  cut(): void {
    console.log('Veggie Pizza: cut');
  }
  box(): void {
    console.log('Veggie Pizza: box');
  }
}

class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'pepperoni':
        pizza = new PepperoniPizza();
        break;
      case 'clam':
        pizza = new ClamPizza();
        break;
      case 'veggie':
        pizza = new VeggiePizza();
        break;
      default:
        break;
    }
    return pizza;
  }
}

class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: string): Pizza {
    let pizza: Pizza;
    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

const simpleFactory = new SimplePizzaFactory();
const pizzaStore = new PizzaStore(simpleFactory);
pizzaStore.orderPizza('veggie');
