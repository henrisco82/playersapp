export interface Player {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  country?: string;
  position?: string;
}


export interface PlayerRessolved {
  player: Player;
  error?: any;
}
