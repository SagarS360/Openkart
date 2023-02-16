import { EventEmitter } from "@angular/core";
import { Product } from "./product.model";


export class ProductListService{

  productSelectedEvent = new EventEmitter<Product>();


    getproducts(){
        return this.products.slice();

    }

    product

    products: Product []=[
        new Product(
          'Y 81',
          'Vivo Moblie with best camera feature',
          'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/VIVO_Y81.jpeg?size=1200:675',
          15000.00,
          'Vivo'
        ),
        new Product(
          'Apple',
          'Experience the brand of APPLE & APPLE MAC',
          'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177751-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDJlLzk4OTA0ODYxOTAxMTAuanBnfDFjNWU5ZDM5YjE4MmJlYjBkNzYzNjAxNDkxOGU2ZmQ3MzlkNWViYjFmYmI4M2ZmNTNmN2ZmMjc5NzgxNWRmYTE',
          40000.00,
          'APPLE'
        )
    ]
}