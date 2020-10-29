import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() inputToDoItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  submit(f:NgForm){
    console.log('Input Component');
    this.inputToDoItem.emit(f.value.inputToDo)
  }

}
