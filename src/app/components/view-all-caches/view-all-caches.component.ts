import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-view-all-caches',
  templateUrl: './view-all-caches.component.html',
  styleUrls: ['./view-all-caches.component.scss']
})
export class ViewAllCachesComponent implements OnInit {

  caches: any;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.caches = this.db.getCaches();
  }

}
