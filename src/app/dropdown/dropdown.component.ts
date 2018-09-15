import { Component, OnInit } from '@angular/core';
import { DishStructure } from '../shared/dish_structure';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

  dishes: DishStructure[];

  selectedDish: DishStructure;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: DishStructure){
      this.selectedDish = dish;
  }

}

