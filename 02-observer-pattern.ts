/**
 * The Observer Pattern defines a one-to-many dependency
 * between objects so that when one object changes state,
 * all of its dependents are notified and updated automatically.
 *
 * The Observer Pattern provides an object design where
 * subjects and observers are loosely coupled
 */
interface Observer {
  update(temp: Number, humidity: Number, pressure: Number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperature: Number;
  private humidity: Number;
  private pressure: Number;

  constructor() {
    this.observers = new Array<Observer>();
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const i = this.observers.indexOf(observer);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: Number,
    humidity: Number,
    pressure: Number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: Number;
  private humidity: Number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} % humidity`
    );
  }

  update(temperature: Number, humidity: Number, pressure: Number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }
}

const weatherData: WeatherData = new WeatherData();

const currentDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(
  weatherData
);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
