import { Component, OnInit } from '@angular/core';
import {MeteoItem} from '../models/MeteoItem';
import {MeteoApiService} from '../services/meteo-api.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  // Liste des météos
  public listeMeteo: MeteoItem[] = [];

  constructor(private meteoApiService: MeteoApiService) { }

  ngOnInit(): void {
    // On lance l'appel à l'API météo avec la ville de base : Lyon
    this.meteoApiService.getMeteoVille(MeteoItem.CONST_VILLE_PAR_DEFAULT).subscribe((res: MeteoItem) => {
      console.log(res);
      this.listeMeteo.push(res);
    });
  }

}
