import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component implements OnInit {
  public items: { name: string; value: number }[] = [];

  getRandomName(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nameLength = Math.floor(Math.random() * 10) + 1;
    let name = '';
    for (let i = 0; i < nameLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      name += characters[randomIndex];
    }
    return name;
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  ngOnInit(): void {
    while (this.items.length < 10000) {
      const name = this.getRandomName();
      const value = this.getRandomValue();

      const record = {
        name: name,
        value: value,
      };

      this.items.push(record);
    }

    this.items.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      let index = 0;
      while (index < nameA.length && index < nameB.length) {
        const charA = nameA.charAt(index);
        const charB = nameB.charAt(index);

        if (charA < charB) {
          return -1;
        }
        if (charA > charB) {
          return 1;
        }
        if (charA == charB) {
          if (a.name.charAt(index) > b.name.charAt(index)) {
            return -1;
          }
          if (a.name.charAt(index) < b.name.charAt(index)) {
            return 1;
          }
        }
        index++;
      }
      if (nameA.length < nameB.length) {
        return -1;
      }
      else {
        return 1;
      }
    });
  }
}