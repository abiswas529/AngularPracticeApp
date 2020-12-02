import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  rowArray = [{ feature: 'Alarm', Read: '--', Write: '--' }];
  blankObj = { feature: 'Alarm', Read: '--', Write: '--' };
  pushRow() {
    this.rowArray = [...this.rowArray, this.blankObj];
  }
  routeToNewPage() {
    this.router.navigate(['/about']);
  }
}
