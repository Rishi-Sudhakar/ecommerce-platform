import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(): void {
    const cartItem = {
      userId: 1, // Example user ID
      date: new Date(),
      products: [{ productId: this.product.id, quantity: 1 }]
    };
    this.cartService.addToCart(cartItem).subscribe();
  }
}
