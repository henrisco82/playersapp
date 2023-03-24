import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Player } from '../models/player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class PlayResolver implements Resolve<Player[]> {
  constructor(private playerService: PlayersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]> | Player[]{
      return this.playerService.getAll().pipe(take(1));
  }
}
