import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface User {
  id?: number
  name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://lesson6-bb170-default-rtdb.europe-west1.firebasedatabase.app'


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users.json`)
    .pipe(map((users: any) => {
      return Object.values(users)
    }))
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}/users.json`, user)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/users.json/${id}`)
  }


}
