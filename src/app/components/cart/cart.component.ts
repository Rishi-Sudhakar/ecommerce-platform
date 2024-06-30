import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const userId = 1; // Example user ID
    this.cartService.getCartByUserId(userId).subscribe(data => {
      this.cartItems = data;
    });
  }

  removeFromCart(itemId: number): void {
    this.cartService.deleteCart(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    });
  }
}
