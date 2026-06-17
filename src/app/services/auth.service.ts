import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.url}/auth/login`, { email, password });
  }

  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.url}/auth/register`, usuario);
  }
}