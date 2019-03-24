import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'helloAngular7';
  mDataarray: any[];

  // test chart
  username = [];
  feedback = [];
  chart = [];
  data: Data[];
  private isEdittable:boolean =true;

  constructor(private http: HttpClient)
  {

  }

  toggleAdd(){
    this.isEdittable =! this.isEdittable;
  }

  onSubmit(data: any)
  {

    this.http.post<any>('http://localhost:3000/api', data).subscribe(result =>
    {
      // alert(JSON.stringify(result));
      this.getFeedback();

    })
  }

  onReload(data: any)
  {

    this.http.post<any>('http://localhost:3000/api', data).subscribe(result =>
    {
      // alert(JSON.stringify(result));
      this.getFeedback();

    })
  }

  getFeedback()
  {

    this.http.get<any>('http://localhost:3000/api').subscribe(result =>
    {
      this.mDataarray = result.data;
      this.ngOnInit();

    })
  }

  ngOnInit(): void
  {
    this.getFeedback();
  }


}

export interface Data {
  username: String;
  feedback: String;
}