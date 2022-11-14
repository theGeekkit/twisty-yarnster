import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twisty-yarnster';
  imageUrl = '(https://i.postimg.cc/VsM6r7Dk/pexels-11016038.jpg)'

  constructor(private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationStart), map(e => e as NavigationStart))
    .subscribe((event: NavigationStart) => {
      console.log(event)
      if(event.url === '/home') {
        this.imageUrl = 'url(https://i.postimg.cc/VsM6r7Dk/pexels-11016038.jpg)'
      } else if(event.url === '/store') {
        this.imageUrl = 'url(https://i.postimg.cc/d1BL3620/pexels-arina-krasnikova-7002964.jpg)'
      } else if(event.url === '/about') {
        this.imageUrl = 'url(https://i.postimg.cc/FH8cXTp5/pexels-eva-bronzini-5660112.jpg)'
      }

    });
  }
}
