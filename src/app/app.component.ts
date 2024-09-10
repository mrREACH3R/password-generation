import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
  public password = "";
  public number = false;
  public symbol = false;
  public letter = false;

  public length = 0;

  checkLength(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      const value = parseInt(inputElement.value);

      if (!isNaN(value)) {
        this.length = value;
      }
    }
  }
  checkLetter() {
    this.letter = !this.letter;
  }
  checkNumber() {
    this.number = !this.number;
  }

  checkSymbol() {
    this.symbol = !this.symbol;
  }


  onsubmit() {
    const n = "0123456789";
    const c = "abcdefghijklmnopqrstuvwxyz";
    const s = "!@#$^%&*";
    let validChar = "";

    if (this.letter) {
      validChar += c;
    }
    if (this.number) {
      validChar += n;
    }

    if (this.symbol) {
      validChar += s;
    }

    let generatedPassword = "";

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;

  }
}
