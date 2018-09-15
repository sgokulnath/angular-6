import { Component, OnInit } from '@angular/core';

import { LeadersService } from '../services/leaders.service';
import { LeaderStructure } from '../shared/leader_structure';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders : LeaderStructure[];

  constructor(private leaderservice : LeadersService) { }

  ngOnInit() {
    this.leaders = this.leaderservice.getLeaders();
  }



}
