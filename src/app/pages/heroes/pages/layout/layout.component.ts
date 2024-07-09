import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {NgStyle} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {AuthService} from "../../../../services/auth.service";
import {UserInterface} from "../../../../interfaces/user.interface";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenav,
    MatSidenavContainer,
    NgStyle,
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatNavList,
    MatListItem,
    RouterLink,
    MatListItemIcon,

  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  public sidebarItems = [
    {
      label: 'List', icon: 'label', url: 'list'
    },
    {
      label: 'Search', icon: 'search', url: 'search'
    },
  ];

  get user(): UserInterface | undefined {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth/login')
  }
}
