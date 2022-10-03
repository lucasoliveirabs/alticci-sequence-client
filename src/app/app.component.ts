import { Component } from '@angular/core';

import { AlticciService } from './service/alticci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  index : any;
  alticciSequenceValue : any;

  constructor(private alticciService : AlticciService){
  }

  getAlticciSequenceValue(){
    this.alticciService.getAlticciSequenceValue(this.index).subscribe(res => {
      this.alticciSequenceValue = res;
    });
  }
}