import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  inputData:string;
  ngOnInit(): void {

  }
  onSubmit(data:string){
    console.log('Main Component');
    console.log(data);

  }

}
