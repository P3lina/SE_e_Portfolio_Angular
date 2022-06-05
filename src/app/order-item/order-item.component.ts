import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass']
})
export class OrderItemComponent implements OnInit {

  constructor() { }
  @Input() title = '';
  @Input() description = '';
  @Input() price = '';

  ngOnInit(): void {
  }

}
