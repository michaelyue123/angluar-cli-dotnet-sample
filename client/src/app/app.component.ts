import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public values: {};
  public apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = 'http://localhost:5000/api';
  }

  ngOnInit() {
    this.getValues().subscribe((res) => {
      this.values = res;
    });
  }

  public getValues(): Observable<any> {
    return this.http
      .get(this.apiUrl + '/values')
      .map((results: Response) => {
          return results.json();
        }
      )
  }

}
