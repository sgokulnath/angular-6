import { Injectable } from '@angular/core';

import { LeaderStructure } from '../shared/leader_structure';
import { LEADERS } from '../shared/leaders'; 

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getLeaders() : LeaderStructure[] {
    return LEADERS;
  }

  getFeaturedLeader(): LeaderStructure {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}
