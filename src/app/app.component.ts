import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngElements';

  addGreeter(){
    const container = document.getElementById("container");
    container.innerHTML =  "<app-greet></app-greet>";
  }
}
