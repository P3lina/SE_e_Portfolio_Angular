import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ePortfolioAngular';
  angebote: Angebot[] = []

  ngOnInit(): void {
    this.angebote?.push({title: 'Motorrad', description: 'Yamaha', price: '9600€'})
    this.angebote?.push({title: 'Fahrrad', description: 'Bulls', price: '1200€'})
    this.angebote?.push({title: 'Auto', description: 'Mercedes', price: '45000€'})
    this.angebote?.push({title: 'Motorrad', description: 'Suzuki', price: '4200€'})
    console.log(this.angebote)
  }


}
export interface Angebot {
  title: string;
  description: string;
  price: string;
}
