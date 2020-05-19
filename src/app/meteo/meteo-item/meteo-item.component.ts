import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MeteoItem} from '../../models/MeteoItem';

@Component({
  selector: 'app-meteo-item',
  templateUrl: './meteo-item.component.html',
  styleUrls: ['./meteo-item.component.css']
})
export class MeteoItemComponent implements OnInit {

  // Element courant de météo
  @Input() meteo: MeteoItem;
  // Action de suppression de l'élément
  @Output() outputActionSuppression: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Méthode permettant de supprimer l'élément météo sélectionné
   */
  public suppressionMeteo(): void {
    this.outputActionSuppression.emit(this.meteo);
  }
}
