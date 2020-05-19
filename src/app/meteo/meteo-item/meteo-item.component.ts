import {Component, Input, OnInit} from '@angular/core';
import {MeteoItem} from '../../models/MeteoItem';

@Component({
  selector: 'app-meteo-item',
  templateUrl: './meteo-item.component.html',
  styleUrls: ['./meteo-item.component.css']
})
export class MeteoItemComponent implements OnInit {

  // Element courant de météo
  @Input() meteo: MeteoItem;

  constructor() { }

  ngOnInit(): void {
  }
}
