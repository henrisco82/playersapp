import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  constructor(
    private playerService: PlayersService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addPlayer(formData: NgForm){
    if(formData.invalid){
      this.toastr.error("Fill the fields correctly");
    }else{
      this.playerService.add(formData.value);
      this.toastr.success("Player added successfully");
      this.router.navigate(["/"]);
    }
  }

}
