import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputToDoItem
  constructor() { }

  ngOnInit(): void {
  }

  submit(f:NgForm){
    this.inputToDoItem=f.value.inputToDo
  }

}
