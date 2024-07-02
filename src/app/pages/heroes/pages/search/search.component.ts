import {Component, inject} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Result} from "../../../../interfaces/hero.interface";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    NgForOf,
    NgIf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private heroesService: HeroesService = inject(HeroesService);
  public searchInput: FormControl<string | null> = new FormControl('');
  public heroes: Result[] = [];
  public selectedHero?: Result;

  searchHero(): void {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value)
      .subscribe((heroes: Result[]): void => {
        console.log(heroes)
        this.heroes = heroes
      })
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return
    }
    const hero = event.option.value;
    this.searchInput.setValue(hero.name);
    this.selectedHero = hero;
  }
}
