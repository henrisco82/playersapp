import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayResolver } from './services/play.resolver';
import { PlayersResolver } from './services/players.resolver';

const routes: Routes = [
  {path: "", component: PlayersComponent, resolve: {players: PlayResolver}},
  {path: "player/new", component: AddPlayersComponent},
  {path: "player/:id", component: PlayerDetailsComponent, resolve: {resolvedData: PlayersResolver}},
  {path: "player/edit/:id", component: EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
