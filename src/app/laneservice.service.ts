import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Lane } from './lanestable/lanestable.component';
import { LaneOrder } from './lanestable/lanestable.component';

export interface CreateLaneRequest{
  lanes:number;
  positions:number;    
}

export interface CraneMoveRequest{
  laneId:string;
  laneOrder:LaneOrder;
  desiredPosition:number;    
}

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  httpClient:HttpClient;
  lanes:BehaviorSubject<Lane[]> = new BehaviorSubject([]);

  constructor(
    private http:HttpClient
  ) { 
    this.httpClient = http;
  }

  findAll(){
    this.httpClient.get<Lane[]>('http://localhost:8080/lane').toPromise().then((lanes:Lane[])=>{
      this.lanes.next(lanes)
    });
  }

  submitLane(createLaneRequest:CreateLaneRequest){ 
    this.httpClient.post("http://localhost:8080/lane", 
    JSON.stringify(createLaneRequest), 
    {headers:{"Content-Type":"application/json"}}).toPromise().then(()=>{
      this.findAll();
    });
  }

  moveCrane(craneMoveRequest:CraneMoveRequest){ 
    this.httpClient.patch("http://localhost:8080/lane", 
    JSON.stringify(craneMoveRequest), 
    {headers:{"Content-Type":"application/json"}}).toPromise().then(()=>{
      this.findAll();
    });
  }


}
