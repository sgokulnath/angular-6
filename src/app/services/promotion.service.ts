import { Injectable } from '@angular/core';

import { PromotionStructure } from '../shared/promotion_structure';
import { PROMOTIONS } from '../shared/promotion_details';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): PromotionStructure[] {
    return PROMOTIONS;
  }

  getPromotionByID(id: number): PromotionStructure {
      return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getFeaturedPromotion() : PromotionStructure {
      return PROMOTIONS.filter((promotion) => (promotion.featured))[0];
  }

}
