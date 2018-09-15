import { Component, OnInit } from '@angular/core';

import { DishService } from '../services/dish.service';
import { DishStructure } from '../shared/dish_structure';
import { PromotionService } from '../services/promotion.service';
import { PromotionStructure } from '../shared/promotion_structure';
import { LeadersService } from '../services/leaders.service';
import { LeaderStructure } from '../shared/leader_structure';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: DishStructure;
  promotion: PromotionStructure;
  leader: LeaderStructure;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderservice: LeadersService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  }

}
