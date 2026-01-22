export class GameBusinessRuleException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GameBusinessRuleException';
  }
}
