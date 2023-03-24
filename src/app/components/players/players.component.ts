import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  filteredPlayers: Player[] = [];

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute) {

    this.route.data.subscribe(data => {
      console.log(data);
      const resolvedData: Player[] = data['players'];
      this.filteredPlayers = this.players = resolvedData;
    })

  }

  ngOnInit(): void {
  }

  filter(query: string){
    console.log(query)
    this.filteredPlayers = (query) ?
          this.players.filter(p => p.firstName?.toLowerCase().includes(query.toLowerCase())) :
          this.players;

  }

}
