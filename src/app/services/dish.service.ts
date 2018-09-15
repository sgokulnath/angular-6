import { Injectable } from '@angular/core';
import { DishStructure } from '../shared/dish_structure';
import { DISHES } from '../shared/dish_details';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): DishStructure[] {
     return DISHES;
  }

  getDishByID(id: number): DishStructure {
     return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish() : DishStructure {
     return DISHES.filter((dish) => (dish.featured))[0];
  }

}
