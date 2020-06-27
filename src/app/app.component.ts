import { Component } from '@angular/core';
import { LaneService } from './laneservice.service';
import { BehaviorSubject } from 'rxjs';
import { Lane } from './lanestable/lanestable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lanes:BehaviorSubject<Lane[]>;
  laneService:LaneService;

  constructor(laneService:LaneService){
    this.lanes = laneService.lanes;
    laneService.findAll();
  }

  title = 'cranecontrol';
}
