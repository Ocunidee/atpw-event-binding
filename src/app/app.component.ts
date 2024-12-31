import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  monkeys: Monkey[] = [{ hasEyesOpen: false }]

  addMonkey() {
    this.monkeys.push({ hasEyesOpen: false })
  }

  openEyes(monkey: Monkey) {
    monkey.hasEyesOpen = true
  }
}

interface Monkey {
  hasEyesOpen: boolean;
}
