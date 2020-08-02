import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticker-info',
  templateUrl: './ticker-info.component.html',
  styleUrls: ['./ticker-info.component.css']
})
export class TickerInfoComponent implements OnInit {

  @Input() tickerName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
