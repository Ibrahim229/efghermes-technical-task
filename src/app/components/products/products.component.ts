import { Component, OnInit } from '@angular/core';
import { Product } from "src/app/models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filteredProducts: Product[]
  products: Product[] = [
    {
      image: "assets/productPreview.png",
      description: "Samsung 32 Inch HD Smart LED TV with Built-in Receiver, Black - UA32T5300AUXEG",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 1
    },
    {
      image: "assets/productPreview.png",
      description: "LG 43 Inch Smart LED Full HD TV With Built In Receiver - 43Lm6300",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 3
    },
    {
      image: "assets/productPreview.png",
      description: "Jac 32 Inch HD Standard LED TV, IPS Panel - Black, 32T",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 6
    },
    {
      image: "assets/productPreview.png",
      description: "LG UHD 4K TV 49 Inch UN73 Series, 4K Active HDR WebOS Smart AI ThinQ - 49UN7340PVC",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 2
    },
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 1
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 4
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 5
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 5
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 3
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 3
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 2
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 1
    }
    ,
    {
      image: "assets/productPreview.png",
      description: "Eastpak Padded Pak’r Backpack, 40 cm, 24 L, Black",
      rate: 4,
      originalPrice: 2000,
      discountPrice: 1600,
      categoryId: 2
    }
  ]

  updateFilteredProductsParent(products: Product[]) {
    this.filteredProducts = products;
  }

  constructor() { }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }



}
