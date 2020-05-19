import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MeteoItem} from '../models/MeteoItem';

@Injectable({
  providedIn: 'root'
})
export class MeteoApiService {

  private static readonly CONST_PREFIX_URL_API = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private static readonly CONST_SUFFIX_URL_API = '&units=metric&appid=87ba5d78649c643e74846312ac028e7e';

  constructor(private http: HttpClient) { }

  /**
   * Méthode permettant de faire une requête via l'API pour obtenir la météo de la ville passée en paramètre
   * @param ville le nom d'une ville
   */
  public getMeteoVille(ville: string): Observable<MeteoItem> {
    return this.http.get(MeteoApiService.CONST_PREFIX_URL_API + ville + MeteoApiService.CONST_SUFFIX_URL_API).pipe(
      map((res: any) => {
        console.log(res);
        return MeteoItem.fromJson(res, MeteoItem);
      }));
  }
}
