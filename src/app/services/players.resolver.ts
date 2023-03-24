import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Player, PlayerRessolved } from '../models/player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersResolver implements Resolve<PlayerRessolved> {
  constructor(private playerService: PlayersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<PlayerRessolved> {
    const id = route.paramMap.get("id") as string;
    return  this.playerService.get(id)
                .pipe(
                    map(player => ({ player: player })),
                    take(1),
                    catchError(error => {
                      const message = `Retrieval error: ${error}`;
                      console.error(message);
                      return of({ player : {}, error: message });
                    })
                  );
  }
}
