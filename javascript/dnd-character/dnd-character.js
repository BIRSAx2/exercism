//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (abilityScore) => {
  if (abilityScore < 3) throw new Error('Ability scores must be at least 3');
  if (abilityScore > 18) throw new Error('Ability scores can be at most 18');

  const initialHitpoints = 10;
  return Math.floor((abilityScore - initialHitpoints) / 2)
};

export class Character {

  constructor() {
    const initialHitpoints = 10;
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
    this._hitpoints = initialHitpoints+abilityModifier(this.constitution)
  }
  static rollDice() {
    return Math.floor(Math.random() * 6) + 1
  }
  static rollAbility() {
    const rolls = Array.from({ length: 4 }, (_) => Character.rollDice()).sort((a, b) => b - a)

    return rolls.slice(0, 3).reduce((a, b) => a + b)
  }

  get strength() {
    return this._strength;

  }

  get dexterity() {
    return this._dexterity;

  }

  get constitution() {
    return this._constitution;

  }

  get intelligence() {
    return this._intelligence;

  }

  get wisdom() {
    return this._wisdom;

  }

  get charisma() {
    return this._charisma;

  }

  get hitpoints() {
    return this._hitpoints;

  }
}
