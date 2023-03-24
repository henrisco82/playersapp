import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Player[]>{
    return this.db.list<Player>("/players")
               .snapshotChanges()
               .pipe(

                 map((x: any) => x.map((y: any) => ({id: y.payload?.key as string, ...y.payload.val() as Player })))
               )
  }

  get(id: string): Observable<Player>{
     return this.db.object<Player>("/players/" + id)
                   .snapshotChanges()
                   .pipe(
                     map(x => ({ ...x.payload.val() as Player, id: x.payload?.key as string }))
                   )
  }

  add(player: Player): void {
    this.db.list<Player>("/players").push(player);
  }

  update(player: Player, playerId: string): void{
    this.db.object<Player>("/players/"+playerId).update(player);
  }

  delete(playerId: string): void {
    this.db.object<Player>("/players/"+playerId).remove();
  }
}
