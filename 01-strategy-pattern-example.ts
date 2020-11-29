/**
 * Weapon interface
 */
interface WeaponBehavior {
  useWeapon(): void;
}

/**
 * Weapon definitions
 */
class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Cutting with knife');
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Shooting with an arrow with a bow');
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Chopping with an axe');
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Swinging a sword');
  }
}

/**
 * Character abstract class
 */
abstract class Character {
  weapon: WeaponBehavior;

  fight(): void {
    if (this.weapon) {
      this.weapon.useWeapon();
    } else {
      console.log('Please give me something to fight');
    }
  }

  setWeapon(weapon: WeaponBehavior) {
    this.weapon = weapon;
  }
}

/**
 * Character definitions
 */
class Queen extends Character {}

class King extends Character {}

class Troll extends Character {}

class Knight extends Character {}

/**
 * Weapons concrete implementations
 */
const knife = new KnifeBehavior();
const bowAndArrow = new BowAndArrowBehavior();
const axe = new AxeBehavior();
const sword = new SwordBehavior();

// Call the real king
const king = new King();
// Let him fight
king.fight();

// Give him knife
king.setWeapon(knife);
// Let him fight
king.fight();

// Give him bow and arrow
king.setWeapon(bowAndArrow);
// Let him fight
king.fight();
