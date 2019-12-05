import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from 'src/app/shared/interfaces';
import {Message} from "src/app/shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) {

  }

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/position/${categoryId}`)
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('/api/position', position)
  }
  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(`/api/position/${position._id}`, position)
  }
  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`/api/position/${position._id}`)
  }
}
