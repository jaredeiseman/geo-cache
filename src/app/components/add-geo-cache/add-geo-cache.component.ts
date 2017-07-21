import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeoCache } from '../../models/geo-cache.model';
import { Router } from '@angular/router';

import { DatabaseService } from '../../services/database.service';
import { GeoCodingService } from '../../services/geo-coding.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-add-geo-cache',
  templateUrl: './add-geo-cache.component.html',
  styleUrls: ['./add-geo-cache.component.scss']
})
export class AddGeoCacheComponent implements OnInit {

  toggle: string = null;

  constructor(private db: DatabaseService,
              private gc: GeoCodingService,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  addCache(form: NgForm) {
    var d = form.value;
    var newCache;

    if (d.toggle === 'latlong') {

      this.gc.getAddressByLatLong(d.lat, d.long)

        .subscribe((res) => {

          var address = res.json().results[0].formatted_address;
          var user: string;

          this.authService.user.subscribe((data) => {
            user = data.displayName;

            newCache = new GeoCache(d.lat, d.long, address, d.name, d.description,user);

            this.db.addCache(newCache);
            this.router.navigate(['/viewall']);
          });
        });

    } else if (d.toggle === 'address') {

      this.gc.getLatLongByAddress(d.streetNumber, d.street, d.city, d.state, d.zipCode)

        .subscribe((res) => {

          var address = res.json().results[0].formatted_address;
          var lat = res.json().results[0].geometry.location.lat;
          var long = res.json().results[0].geometry.location.lng;
          var user: string;

          this.authService.user.subscribe((data) => {
            user = data.displayName;

            newCache = new GeoCache(lat, long, address, d.name, d.description, user);

            this.db.addCache(newCache);
            this.router.navigate(['/viewall']);
          });
        });
    }
  }

  toggleDisplay(which) {
    this.toggle = which;
  }

}
