
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DattingApp';
  http = inject(HttpClient)
  users:any;

  ngOnInit(): void{
    this.http.get('http://localhost:5062/api/users').subscribe({
      next: respnse=> this.users= respnse,
      error:error=>console.log(error),
      complete:()=>console.log('completed')
    })
    console.log(this.users);
  }
}
