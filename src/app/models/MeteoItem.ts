import {JSONBuilder} from './JSONBuilder';

export class MeteoItem extends JSONBuilder {

  public static readonly CONST_VILLE_PAR_DEFAULT = 'Lyon';
  name: string;
}
