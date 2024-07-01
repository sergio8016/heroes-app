import {Component, inject, OnInit} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";
import {Result} from "../../../../interfaces/hero.interface";
import {MatDivider} from "@angular/material/divider";
import {CardComponent} from "../../components/card/card.component";
import {tap} from "rxjs";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatDivider,
    CardComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  private heroesService: HeroesService = inject(HeroesService);
  public heroes: Result[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes()
      .pipe(
        tap(console.log)
      )
      .subscribe((results: Result[]) => this.heroes = results);
  }
}
