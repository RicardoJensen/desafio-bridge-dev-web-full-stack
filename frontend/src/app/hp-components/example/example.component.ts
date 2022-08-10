import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() exampleText: string = "";

  toggleExaple: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.toggleExaple = !this.toggleExaple;
  }

}
