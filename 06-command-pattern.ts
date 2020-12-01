/**
 * The Command Pattern encapsulates a request as an object,
 * thereby letting you parameterize other objects with
 * different requests, queue or log requests, and support
 * undoable operations.
 */
interface Command {
  execute(): void;
  undo(): void;
}

class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  undo(): void {
    this.light.off();
  }

  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  undo(): void {
    this.light.on();
  }

  execute(): void {
    this.light.off();
  }
}

class SprinklerOpenCommand implements Command {
  sprinkler: Sprinker;

  constructor(sprinkler: Sprinker) {
    this.sprinkler = sprinkler;
  }

  undo(): void {
    this.sprinkler.waterOff();
  }

  execute(): void {
    this.sprinkler.waterOn();
  }
}

class SprinklerCloseCommand implements Command {
  sprinkler: Sprinker;

  constructor(sprinkler: Sprinker) {
    this.sprinkler = sprinkler;
  }

  undo(): void {
    this.sprinkler.waterOn();
  }

  execute(): void {
    this.sprinkler.waterOff();
  }
}

class SecurityControlOnCommand implements Command {
  securityControl: SecurityControl;

  constructor(securityControl: SecurityControl) {
    this.securityControl = securityControl;
  }

  undo(): void {
    this.securityControl.disarm();
  }

  execute(): void {
    this.securityControl.arm();
  }
}

class SecurityControlOffCommand implements Command {
  securityControl: SecurityControl;

  constructor(securityControl: SecurityControl) {
    this.securityControl = securityControl;
  }

  undo(): void {
    this.securityControl.arm();
  }

  execute(): void {
    this.securityControl.disarm();
  }
}

class GarbageDoorOpenCommand implements Command {
  garbageDoor: GarbageDoor;

  constructor(garbageDoor: GarbageDoor) {
    this.garbageDoor = garbageDoor;
  }

  undo(): void {
    this.garbageDoor.down();
  }

  execute(): void {
    this.garbageDoor.up();
  }
}

class GarbageDoorCloseCommand implements Command {
  garbageDoor: GarbageDoor;

  constructor(garbageDoor: GarbageDoor) {
    this.garbageDoor = garbageDoor;
  }

  undo(): void {
    this.garbageDoor.up();
  }

  execute(): void {
    this.garbageDoor.down();
  }
}

class NoCommand implements Command {
  undo(): void {
    console.log('No Command has been assigned');
  }

  execute(): void {
    console.log('No Command has been assigned');
  }
}

class MacroCommand implements Command {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  }

  undo(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].undo();
    }
  }
}

/**
 * For One Button Remote Control
 */
class SimpleRemoteControl {
  slot: Command;

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot.execute();
  }
}

/**
 * Full Remote Control
 */
class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = new Array();
    this.offCommands = new Array();
    const noCommand: Command = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }
}

// Vendor provided APIS
class Light {
  on() {
    console.log('Light: On');
  }
  off() {
    console.log('Light: Off');
  }
}

class Sprinker {
  waterOn() {
    console.log('Sprinker: On');
  }
  waterOff() {
    console.log('Sprinker: Off');
  }
}

class SecurityControl {
  arm() {
    console.log('Security Control: On');
  }
  disarm() {
    console.log('Security Control: Off');
  }
}

class GarbageDoor {
  up() {
    console.log('Garbage Door: On');
  }

  down() {
    console.log('Garbage Door: Off');
  }
}

const remote: RemoteControl = new RemoteControl();

// Receivers
const light: Light = new Light();
const sprinkler: Sprinker = new Sprinker();
const securityControl: SecurityControl = new SecurityControl();
const garbageDoor: GarbageDoor = new GarbageDoor();

// Commands
const lightOnCommand: LightOnCommand = new LightOnCommand(light);
const lightOffCommand: LightOffCommand = new LightOffCommand(light);
const sprinklerOpenCommand: SprinklerOpenCommand = new SprinklerOpenCommand(
  sprinkler
);
const sprinklerCloseCommand: SprinklerCloseCommand = new SprinklerCloseCommand(
  sprinkler
);
const securityControlOnCommand: SecurityControlOnCommand = new SecurityControlOnCommand(
  securityControl
);
const securityControlOffCommand: SecurityControlOffCommand = new SecurityControlOffCommand(
  securityControl
);
const garbageDoorOpenCommand: GarbageDoorOpenCommand = new GarbageDoorOpenCommand(
  garbageDoor
);
const garbageDoorCloseCommand: GarbageDoorCloseCommand = new GarbageDoorCloseCommand(
  garbageDoor
);

// Invokers
remote.setCommand(0, lightOnCommand, lightOffCommand);
remote.setCommand(1, sprinklerOpenCommand, sprinklerCloseCommand);
remote.setCommand(2, securityControlOnCommand, securityControlOffCommand);
remote.setCommand(3, garbageDoorOpenCommand, garbageDoorCloseCommand);

remote.onButtonWasPushed(0);
remote.offButtonWasPushed(0);
remote.undoButtonWasPushed();
remote.onButtonWasPushed(1);
remote.offButtonWasPushed(1);
remote.undoButtonWasPushed();
remote.onButtonWasPushed(2);
remote.offButtonWasPushed(2);
remote.onButtonWasPushed(3);
remote.offButtonWasPushed(3);
remote.onButtonWasPushed(4);
remote.offButtonWasPushed(4);

console.log('PARTYYYYYY!!!!!');
const partyOn: Command[] = [
  lightOnCommand,
  sprinklerOpenCommand,
  securityControlOnCommand,
  garbageDoorOpenCommand,
];
const partyOff: Command[] = [
  lightOffCommand,
  sprinklerCloseCommand,
  securityControlOffCommand,
  garbageDoorCloseCommand,
];

const partyOnCommand = new MacroCommand(partyOn);
const partyOffCommand = new MacroCommand(partyOff);

remote.setCommand(4, partyOnCommand, partyOffCommand);
remote.onButtonWasPushed(4);
remote.offButtonWasPushed(4);
remote.undoButtonWasPushed();
