import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-caches',
  templateUrl: './view-all-caches.component.html',
  styleUrls: ['./view-all-caches.component.scss']
})
export class ViewAllCachesComponent implements OnInit {

  caches: any;

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.caches = this.db.getCaches();
  }

  viewDetails(id) {
    this.router.navigate(['/view/' + id]);
  }

}
