import { AppService } from './../../services/app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/result';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() result: EventEmitter<Result> = new EventEmitter<Result>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLoading: boolean = false;
  n!: number;
  allowedKeys: string = "0123456789-";
  valid: boolean = true;
  errorText: string = "";

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  submit() {
    this.validate(this.n);
    if (this.valid) {
      this.toggleLoading();
      this.service.calculate(this.n).subscribe({
        next: (res) => {
          const data : Result = {
            "input" : this.n.toString(),
            "amount" : res[0].toString(),
            "time" : (res[1] / 1000).toFixed(3).toString() + " s"
          };
          this.toggleLoading();
          this.result.emit(data);
        },
        error: () => {
          alert("Um erro aconteceu, tente novamente");
          this.toggleLoading();
        }
      });
    }
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
    this.loading.emit(this.isLoading);
  }

  handleKeypress(e: any) {
    const key = e.key;
    if (key === "Enter") {
      this.submit();
    }
    if (!(this.allowedKeys.includes(key))) {
      e.preventDefault();
    }
  }

  validate(n: number) {
    if (typeof n !== "number") {
      this.errorText = "Insira um número";
      this.valid = false;
    } else if (n % 1 !== 0) {
      this.errorText = "Insira um número inteiro";
      this.valid = false;
    } else if ((Math.abs(n)).toString().length > 9) {
      this.errorText = "Insira um número com até 9 digitos";
      this.valid = false;
    } else {
      this.valid = true;
    }
  }

}