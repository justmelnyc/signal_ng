import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent implements OnInit, OnDestroy {

  private userId: string;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      console.log('======', this.userId);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addNewSpot() {
    this.router.navigate(['/account/:id/new']);
  }
}
