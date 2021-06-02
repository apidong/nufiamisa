import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { navItems } from '../../_nav';

import { Submenu } from './_menu';

// import { AuthService } from '../../config/auth.service';
// import { ContainerService } from '../container.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public varnaviitem: any = Submenu;
  public navItems: any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public profileuser: any;

  constructor(
    // private profile: ContainerService,
    // private autservice: AuthService,
    private router: Router
  ) {
    console.log(this.router.url);
    console.log(this.varnaviitem);
    let urlrouter: any = this.router.url;
    urlrouter = urlrouter.split('/');

    this.navItems = this.varnaviitem[urlrouter[2]];
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    // profile.user().then(response => {
    //   if (response.status === true) {
    //     this.profileuser = response.data;
    //   }
    // });

    // profile.menu().then(response => {
    //   if (response.status === true) {
    //     this.navItems = response.data;
    //   }
    // });
  }

  logout() {
    // this.autservice.hapus_key();
    // this.router.navigate(['/login']);
  }
}
