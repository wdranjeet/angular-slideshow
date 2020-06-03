import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Slideshow From Drupal Resource';
  public data: any = [];

  constructor(private http: HttpClient) {}

  getData() {
    //Drupal Resource URL
    //http://www.example.com/api/?_format=json
    // Json Format
    // {"id": "1",
    //   "title": "Test",
    //     "thumbnailUrl": "URL"
    // }

    const url =
      'http://www.example.com/api/slideshow?_format=json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
    });
  }

  ngOnInit() {
    console.log('Data is loading');
    console.log(this.getData());
  }
}
