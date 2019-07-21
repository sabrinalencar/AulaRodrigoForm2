import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeApiUrl = 'https://pokeapi.co/api/v2/';

  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(public http: HttpClient) { }

  getPokemon(id): Observable<any> {
    return this.http.get(this.pokeApiUrl + 'pokemon/' + id, this.httpHeaders).pipe(map(res => res));
  }

}
