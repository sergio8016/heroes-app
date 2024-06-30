import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {NgStyle} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";

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
  public sidebarItems = [
    {
      label: 'List', icon: 'label', url: 'list'
    },
    {
      label: 'Add', icon: 'add', url: 'new'
    },
    {
      label: 'Search', icon: 'search', url: 'search'
    },
  ];
}
