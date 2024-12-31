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

  closeEyes(monkey: Monkey) {
    monkey.hasEyesOpen = false
  }
}

interface Monkey {
  hasEyesOpen: boolean;
}
