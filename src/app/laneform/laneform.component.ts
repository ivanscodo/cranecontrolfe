import { Component, OnInit } from '@angular/core';
import { LaneService } from '../laneservice.service';
import { LaneOrder } from '../lanestable/lanestable.component';

@Component({
  selector: 'app-laneform',
  templateUrl: './laneform.component.html',
  styleUrls: ['./laneform.component.scss']
})
export class LaneformComponent implements OnInit {

  lanes:number;
  positions:number;
  laneService:LaneService;
  laneId:string;
  laneOrder:LaneOrder;
  desiredPosition:string;

  constructor(laneService:LaneService) {
    this.laneService = laneService;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.laneService.submitLane({lanes:this.lanes, positions:this.positions})
  }
}
