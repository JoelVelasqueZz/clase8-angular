import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;
  @Output() agregarFavorito = new EventEmitter<Pokemon>();

  onFavorito(): void {
    this.agregarFavorito.emit(this.pokemon);
  }
}