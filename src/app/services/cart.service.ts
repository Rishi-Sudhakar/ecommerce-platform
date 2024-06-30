import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) { }

  getCartByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  addToCart(cart: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cart);
  }

  updateCart(id: number, cart: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cart);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
