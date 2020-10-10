import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  isCollapsed = false;
  @Input() filteredProducts: Product[]
  @Input() products: Product[]
  @Output() updateFilteredProducts: EventEmitter<Product[]> = new EventEmitter<Product[]>()
  categoriesSelected: Category[] = [
  ]
  categories: Category[] = [
    {
      categoryId: 1,
      categoryName: "Samsung",
      isChecked: false
    },
    {
      categoryId: 2,
      categoryName: "LG",
      isChecked: false
    },
    {
      categoryId: 3,
      categoryName: "Toshiba",
      isChecked: false
    },
    {
      categoryId: 4,
      categoryName: "Sony",
      isChecked: false
    },
    {
      categoryId: 5,
      categoryName: "Symphony",
      isChecked: false
    },
    {
      categoryId: 6,
      categoryName: "Ata",
      isChecked: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getSelectedCategories(index) {
    if (this.categories[index].isChecked) {
      const selectedIndex: number = this.categoriesSelected.indexOf(this.categories[index])
      if (selectedIndex !== -1) {
        this.categoriesSelected.splice(selectedIndex, 1)
      }

    } else {
      this.categoriesSelected.push(this.categories[index]);
    }
  }

  onCategorySelected(index: number) {
    this.getSelectedCategories(index);
    this.filterbyCateories()
    console.log('this.categoriesSelected', this.categoriesSelected);
    this.categories[index].isChecked = !this.categories[index].isChecked;
  }


  filterbyCateories() {
    if (this.categoriesSelected.length > 0) {
      this.filteredProducts = this.products.filter((product) => {
        return this.categoriesSelected.some(cateory => {
          return product.categoryId == cateory.categoryId
        })
      });
    } else {
      this.filteredProducts = this.products;
    }
    this.updateFilteredProducts.emit(this.filteredProducts);
  }

  filterProduct(query: string) {
    this.filteredProducts = query ?
      this.products.filter(product => product.description.toLowerCase().includes(query.toLowerCase())) : this.products;

    this.updateFilteredProducts.emit(this.filteredProducts);
  }
}
