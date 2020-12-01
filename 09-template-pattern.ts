/**
 * The Template Method defines the steps of an algorithm
 * and allows subclasses to provide the implementation for
 * one or more steps
 */
abstract class CaffeineBeverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  boilWater(): void {
    console.log('Boiling Water');
  }

  pourInCup(): void {
    console.log('Pour into Cup');
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  // Hook
  customerWantsCondiments(): boolean {
    return true;
  }
}

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('Dripping Coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding Sugar and Milk');
  }
}

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Addming Lemon');
  }
}

const tea = new Tea();
tea.prepareRecipe();

const coffee = new Coffee();
coffee.prepareRecipe();
