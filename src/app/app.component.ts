import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'type-of-beauty';
  currentRoute = '';

  constructor(private router: Router) {
    router.events.subscribe((route:any) => {
      if(route instanceof NavigationEnd){
      this.currentRoute=route.url;
      }
    });
  }
}

