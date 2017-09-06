/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
// import { PostsService } from './posts/posts.service';
// import { UsersService } from './users/users.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
  providers: [
//    PostsService,
//    UsersService,
  ]
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  //public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

