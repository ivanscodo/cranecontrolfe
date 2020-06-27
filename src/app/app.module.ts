import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LanestableComponent } from './lanestable/lanestable.component';
import { LaneformComponent } from './laneform/laneform.component';
import { LaneService } from './laneservice.service';
@NgModule({
  declarations: [
    AppComponent,
    LanestableComponent,
    LaneformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
