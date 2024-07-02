import {Component, inject, OnInit} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {switchMap} from "rxjs";
import {Result} from "../../../../interfaces/hero.interface";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {JsonPipe} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatTree, MatTreeNode, MatTreeNodeDef, MatTreeNodePadding} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatProgressSpinner,
    JsonPipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatList,
    MatListItem,
    MatTree,
    MatTreeNode,
    MatTreeNodePadding,
    MatTreeNodeDef,
    MatChipSet,
    MatChip,
    MatButton,
    RouterLink,
    MatIcon
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  private heroesService: HeroesService = inject(HeroesService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  public hero!: Result;
  public treeControl: FlatTreeControl<any> = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(
          ({id}) => this.heroesService.getHeroById(id)
        ),
      )
      .subscribe((hero: Result) => {
        if (!hero) return this.router.navigate(['/heroes.list']);

        this.hero = hero;
        console.log(this.hero)
        return;
      })
  }

  onReturn() {
    this.router.navigateByUrl('heroes/list')
  }
}
