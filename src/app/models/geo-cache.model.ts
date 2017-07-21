export class GeoCache {
  constructor(public lat: string,
              public long: string,
              public streetNumber: string,
              public streetName: string,
              public city: string,
              public state: string,
              public zipCode: number,
              public name: string,
              public description: string) {}
}
