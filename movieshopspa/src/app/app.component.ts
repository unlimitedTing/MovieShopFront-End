import { Component } from '@angular/core';

// decoraters
// become angular component, similar concept with mvc controller
// return template url
// selector use as html tag in view
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export is like public keyword in c#
export class AppComponent {
  title = 'movieshopspa';
}
