import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  cacheId: string = null;
  cache: any;

  constructor(private route: ActivatedRoute, private location: Location, private db: DatabaseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cacheId = urlParameters['id'];
    });
    this.cache = this.db.getCacheById(this.cacheId);
  }

}
