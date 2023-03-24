import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, PlayerRessolved } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id: string = "";
  player: Player = {};
  errorMessage: any;

  constructor(
    private playerService: PlayersService,
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.routes.snapshot.paramMap.get("id") as string;

    if(this.id){
      this.playerService.get(this.id).subscribe(p => this.player = p);
    }

  }



  editPlayer(f: NgForm){
     this.playerService.update(f.value, this.id);
     this.router.navigate(["/"]);

  }

}
