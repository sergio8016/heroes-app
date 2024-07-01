import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../../../interfaces/hero.interface";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {NgIf, SlicePipe} from "@angular/common";
import {MatChip, MatChipListbox} from "@angular/material/chips";
import {TruncatePipe} from "../../../../pipes/truncate.pipe";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    NgIf,
    MatCardContent,
    MatChipListbox,
    MatChip,
    SlicePipe,
    TruncatePipe,
    MatCardImage,
    MatDivider,
    MatCardActions,
    MatButton,
    RouterLink,
    MatIcon
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Result;

  ngOnInit() {
    if (!this.hero) throw new Error('Hero property is required');
  }
}
