import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GeoCodingService {

  baseURI: string = 'https://maps.googleapis.com/maps/api/geocode/json?';

  constructor(private http: Http) { }

  getLatLongByAddress(streetNumber: string,
                      streetName: string,
                      city: string,
                      state: string,
                      zipCode: string) {
    console.log(`${this.baseURI}address=${streetNumber}+${streetName}+${city}+${state}+${zipCode}`);
    return this.http.get(`${this.baseURI}address=${streetNumber}+${streetName}+${city}+${state}+${zipCode}`);
  }

  getAddressByLatLong(lat: string, long: string) {
    return this.http.get(`${this.baseURI}latlng=${lat},${long}`);
      // .subscribe((res) => {
      //   console.log(res.json());
      // });
  }

}
