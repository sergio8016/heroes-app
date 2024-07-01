import {Component, inject, OnInit} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {Result} from "../../../../interfaces/hero.interface";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  private heroesService: HeroesService = inject(HeroesService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  public hero!: Result;

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
        return;
      })
  }
}
