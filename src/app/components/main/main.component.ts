import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}

  apiData: any;
  list: string[] = [];
  ngOnInit(): void {
    this.http.get('https://todo-app-9eca6.firebaseio.com/toDo.json').subscribe(
      (re) => {
        console.log(re);
        console.log(Object.getOwnPropertyNames(re));

        this.apiData = Object.values(re);
        this.apiData.map((data) => {
          this.list.push(data.toDoItem);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(inputData: string) {
    const data = {
      toDoItem: inputData,
    };
    this.http
      .post('https://todo-app-9eca6.firebaseio.com/toDo.json', data)
      .subscribe(
        (re) => {
          console.log(re);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
