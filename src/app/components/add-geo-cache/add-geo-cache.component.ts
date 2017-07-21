import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeoCache } from '../../models/geo-cache.model';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-add-geo-cache',
  templateUrl: './add-geo-cache.component.html',
  styleUrls: ['./add-geo-cache.component.scss']
})
export class AddGeoCacheComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  addCache(form: NgForm) {
    var d = form.value;
    var newCache = new GeoCache(d.lat, d.long, d.name, d.description);

    this.db.addCache(newCache);
  }

}
