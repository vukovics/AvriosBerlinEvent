export interface EventList {
  index: SingleEvent;
}

export interface SingleEvent {
  bemerkungen: string;
  bezeichnung: string;
  bezirk: string;
  bild: string;
  bis: Date;
  copyright: string;
  id: number;
  mail: string;
  plz: number;
  rss_titel: string;
  strasse: string;
  veranstalter: string;
  von: Date;
  www: string;
  zeit: string;
}
