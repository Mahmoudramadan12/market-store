import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;
  success: boolean = false;

  ngOnInit(): void {
    this.getCartProducts();
  }
  constructor(private service: CartsService) {}
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();

    //this.getCartTotal()
  }

  getCartTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total += this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  minsAmount(index: number) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productid: item.item.id, quantity: item.quantity };
    });
    let Model = {
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.service.createNewCart(Model).subscribe((res) => {
      this.success = true;
    });
    console.log(products);
  }
  /*  { }
  total:number = 0;
  ngOnInit(): void {
    this.getCartProducts()
  }

  clearCart() {
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  getCartTotal() {
    this.total = 0
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addCart() {
   let products = this.cartProducts.map(item => {
    return {productId:item.item.id , quantity:item.quantity}
   })

    let Model = {
      userId:5,
      date: new Date(),
      products:products
    }

    this.service.createNewCart(Model).subscribe(res => {
      this.success = true
    })

    console.log(Model)
  }
*/
}
