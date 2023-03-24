import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, PlayerRessolved } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';
declare var bootbox:any;

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  id: string = "";
  player: Player = {};
  errorMessage: any;

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id") as string;

   this.route.data.subscribe(data => {
    const resolvedData: PlayerRessolved = data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onPlayerRetrieved(resolvedData.player);
  });
  }

  onPlayerRetrieved(player: Player): void {
    this.player = player;
  }

  onDeleteClick(){
    bootbox.confirm("Are you sure?", (result: boolean)=>{
      if(result){
        this.playerService.delete(this.id);
        this.router.navigate(["/"]);
      }else{
        this.router.navigate(["/player/", this.id]);
      }

    });
  }

}
