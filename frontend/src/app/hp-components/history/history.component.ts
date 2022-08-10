import { Result } from './../../result';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  @Input() historyData: Array<Result> = []
  @Output() clearHistory: EventEmitter<any> = new EventEmitter();

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleModal() {
    this.showModal = !this.showModal;
  }

  emitClearHistory() {
    this.clearHistory.emit();
  }

}
