import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  @Input() backButton = false;
  @Input() titulo = '';
  constructor() { }

  ngOnInit() {
    console.log(this.backButton);
    console.log(this.titulo);
  }

}
