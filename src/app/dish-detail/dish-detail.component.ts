import { Component, OnInit, Input } from '@angular/core';
import { Params , ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { DishStructure } from '../shared/dish_structure';
import { DishService } from '../services/dish.service';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: DishStructure;

  constructor(private dishservice : DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
      let id = +this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDishByID(id);
  }

  goBack(): void {
    this.location.back();
  }

}
