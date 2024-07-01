import {Component, inject, OnInit} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";
import {Result} from "../../../../interfaces/hero.interface";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
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
      .subscribe((results: Result[]) => this.heroes = results);
  }
}
