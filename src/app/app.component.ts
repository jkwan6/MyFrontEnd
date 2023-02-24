import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hasNetworkConnection: boolean = true;
  hasInternetAccess: boolean = true;

  constructor() { }

  public isOnline() {
    return this.hasNetworkConnection && this.hasInternetAccess;
  }


}
