import { Component, OnInit, Input } from '@angular/core';
import { LaneService } from '../laneservice.service';

export interface Lane { 
  id:string;
  positions:number,
  crane:Crane[]
}

export interface Crane {
  currentPosition:number,
  laneOrder:LaneOrder
}

export enum LaneOrder {
  FIRST="First",
  SECOND="Second"
}

@Component({
  selector: 'app-lanestable',
  templateUrl: './lanestable.component.html',
  styleUrls: ['./lanestable.component.scss']
})
export class LanestableComponent implements OnInit {
  
  laneService:LaneService;
  laneId:string;
  laneOrder:LaneOrder;
  desiredPosition:number;
  
  constructor(laneService:LaneService) {
    this.laneService = laneService;
  }

  @Input() lanes:Lane[];

  ngOnInit(): void {
    
  }

  onMoveCrane(crane:Crane, lane:Lane){
    this.laneService.moveCrane({laneId:lane.id, laneOrder:crane.laneOrder, desiredPosition:crane.currentPosition});
  }
}
