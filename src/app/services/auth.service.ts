import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000';  // Update with your Flask backend URL

  constructor(private http: HttpClient) {}

  registerUser(formData: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, formData);
  }
}
