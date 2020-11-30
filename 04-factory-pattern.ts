/**
 * The Factory Method Pattern defines a interface for creating an object,
 * but lets subclasses which class to instantiate. Factory Method lets
 * a class defer instantiation to subclasses.
 */
abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  veggies: Veggie[];
  pepperoni: Pepperoni;
  clam: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }
}

class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

class VeggiePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}

class ClamPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}

class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}

abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    let pizza: Pizza;
    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    let ingredientFactory: PizzaIngredientFactory = new NYIngredientFactory();
    switch (type) {
      case 'cheese': {
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = 'New York Style Cheese Pizza';
        break;
      }
      case 'pepperoni': {
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = 'New York Style Pepperoni Pizza';
        break;
      }
      case 'clam': {
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = 'New York Style Clam Pizza';
        break;
      }
      case 'veggie': {
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = 'New York Style Veggie Pizza';
        break;
      }
      default:
        break;
    }
    return pizza;
  }
}

class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    let ingredientFactory: PizzaIngredientFactory = new ChicagoIngredientFactory();
    switch (type) {
      case 'cheese': {
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = 'New York Style Cheese Pizza';
        break;
      }
      case 'pepperoni': {
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = 'New York Style Pepperoni Pizza';
        break;
      }
      case 'clam': {
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = 'New York Style Clam Pizza';
        break;
      }
      case 'veggie': {
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = 'New York Style Veggie Pizza';
        break;
      }
      default:
        break;
    }
    return pizza;
  }
}

// Dough
interface Dough {}

class ThinCrustDough implements Dough {}
class ThickCrustDough implements Dough {}

// Sauce
interface Sauce {}

class MarinaraSauce implements Sauce {}
class PlumTomatoSauce implements Sauce {}

// Cheese
interface Cheese {}

class ReggianoCheese implements Cheese {}
class MozzarellaCheese implements Cheese {}

// Veggie
interface Veggie {}

class Garlic implements Veggie {}
class Onion implements Veggie {}
class Mushroom implements Veggie {}
class RedPepper implements Veggie {}
class Spinach implements Veggie {}
class BlackOlives implements Veggie {}
class EggPlant implements Veggie {}

// Pepperoni
interface Pepperoni {}

class SlicedPepperoni implements Pepperoni {}

// Clams
interface Clams {}

class FreshClams implements Clams {}
class FrozenClam implements Clams {}

// Factory
interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggie[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

class NYIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
  createCheese(): Cheese {
    return new ReggianoCheese();
  }
  createVeggies(): Veggie[] {
    const veggies: Veggie[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ];
    return veggies;
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FreshClams();
  }
}

class ChicagoIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }
  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }
  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
  createVeggies(): Veggie[] {
    const veggies: Veggie[] = [
      new BlackOlives(),
      new Spinach(),
      new EggPlant(),
    ];
    return veggies;
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FrozenClam();
  }
}

const nyPizzaStore = new NYStylePizzaStore();
nyPizzaStore.orderPizza('veggie');

const chPizzaStore = new ChicagoStylePizzaStore();
chPizzaStore.orderPizza('cheese');
