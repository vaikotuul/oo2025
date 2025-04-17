// === TÜÜBID JA KLASSID ===
abstract class Character {
    constructor(
      public name: string,
      public health: number,
      protected level: number = 1
    ) {}
  
    abstract attack(target: Character): string;
    abstract defend(): string;
    
    takeDamage(damage: number): string {
      this.health -= damage;
      return `${this.name} sai ${damage} punkti kahju!`;
    }
  }
  
  class Warrior extends Character {
    private stamina: number;
  
    constructor(name: string) {
      super(name, 150);
      this.stamina = 100;
    }
  
    attack(target: Character): string {
      const message = `${this.name} lõi mõõgaga!`;
      target.takeDamage(25);
      this.stamina -= 15;
      return message;
    }
  
    defend(): string {
      this.stamina += 10;
      return `${this.name} kaitseb end kilbiga!`;
    }
  
    getStamina(): number {
      return this.stamina;
    }
  }
  
  class Mage extends Character {
    private mana: number;
  
    constructor(name: string) {
      super(name, 90);
      this.mana = 200;
    }
  
    attack(target: Character): string {
      const message = `${this.name} viskas tulekera!`;
      target.takeDamage(35);
      this.mana -= 25;
      return message;
    }
  
    defend(): string {
      this.mana += 20;
      return `${this.name} loitsib kaitse!`;
    }
  
    castHealingSpell(): string {
      this.health += 40;
      this.mana -= 30;
      return `${this.name} parandas end!`;
    }
  
    getMana(): number {
      return this.mana;
    }
  }
  
  interface Weapon {
    name: string;
    damage: number;
    use(): string;
  }
  
  class Sword implements Weapon {
    constructor(public name: string, public damage: number = 30) {}
  
    use(): string {
      return `Lõikasid mõõgaga (${this.damage} dmg)!`;
    }
  }
  
  class GameManager {
    private players: Character[] = [];
    private battleLog: string[] = [];
  
    addPlayer(player: Character) {
      this.players.push(player);
    }
  
    addLogMessage(message: string) {
      this.battleLog.push(message);
    }
  
    getLog(): string[] {
      return this.battleLog;
    }
  }
  
  // === MÄNGU SEADISTUS ===
  const player = new Warrior("Kangelane");
  const enemy = new Mage("Tume võlur");
  const game = new GameManager();
  game.addPlayer(player);
  
  // === UI HALDUS ===
  function updateUI() {
    // Elud
    const healthElement = document.getElementById('health-value');
    if (healthElement) {
      healthElement.textContent = `${player.health} HP`;
      (healthElement.parentNode as HTMLElement).style.width = `${Math.max(0, player.health)}%`;
    }
  
    // Staatusriba (Stamina/Mana)
    const resourceElement = document.getElementById('mana-value');
    if (resourceElement) {
      if (player instanceof Warrior) {
        resourceElement.textContent = `${player.getStamina()} Stamina`;
        (resourceElement.parentNode as HTMLElement).style.width = `${player.getStamina()}%`;
      }
      if (player instanceof Mage) {
        resourceElement.textContent = `${player.getMana()} Mana`;
        (resourceElement.parentNode as HTMLElement).style.width = `${player.getMana()}%`;
      }
    }
  
    // Battle logi uuendamine
    const logElement = document.getElementById('battle-log');
    if (logElement) {
      logElement.innerHTML = game.getLog()
        .map(entry => `<div class="log-entry">${entry}</div>`)
        .join('');
    }
  }
  
  // === NUPU HANDLERID ===
  document.querySelector('.attack-btn')?.addEventListener('click', () => {
    const attackMessage = player.attack(enemy);
    const damageMessage = enemy.takeDamage(25); // Warrior base damage
    game.addLogMessage(attackMessage);
    game.addLogMessage(damageMessage);
    updateUI();
  });
  
  document.querySelector('.defend-btn')?.addEventListener('click', () => {
    const defendMessage = player.defend();
    game.addLogMessage(defendMessage);
    updateUI();
  });
  
  document.querySelector('.special-btn')?.addEventListener('click', () => {
    if (player instanceof Mage) {
      const healMessage = player.castHealingSpell();
      game.addLogMessage(healMessage);
    }
    updateUI();
  });
  
  // === ALGSEISU LOOMINE ===
  updateUI();