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
  // Ville à rechercher
  public villeARechercher: string = null;

  constructor(private meteoApiService: MeteoApiService) { }

  ngOnInit(): void {
    // On lance l'appel à l'API météo avec la ville de base : Lyon
    this.meteoApiService.getMeteoVille(MeteoItem.CONST_VILLE_PAR_DEFAULT).subscribe((res: MeteoItem) => {
      console.log(res);
      this.listeMeteo.push(res);
    });
  }

  /**
   * Méthode permettant d'ajouter une météo à l'application via le champ de recherche
   */
  public ajouterMeteo(): void {
    // On lance l'appel à l'API météo avec la ville que l'utilisateur veut rechercher
    this.meteoApiService.getMeteoVille(this.villeARechercher).subscribe((res: MeteoItem) => {
      // On ajoute à notre liste la nouvelle météo
      this.listeMeteo.push(res);
      // On remet à zéro le champ de recherche
      this.villeARechercher = null;
    });
  }

  /**
   * Méthode permettant de faire un traitement pour la suppression d'un item météo
   * @param meteo météo à supprimer
   */
  public traitementSuppressionMeteo(meteo: MeteoItem): void {
    this.listeMeteo.splice(this.listeMeteo.indexOf(meteo), 1);
  }
}
