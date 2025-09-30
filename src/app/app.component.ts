import { Component, signal, WritableSignal } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly monkeys: WritableSignal<Monkey[]> = signal([{ hasEyesOpen: false }])

  addMonkey() {
    this.monkeys.update(value => [...value, { hasEyesOpen: false }])
  }

  openEyes(monkey: Monkey) {
    monkey.hasEyesOpen = true
  }

  closeEyes(monkey: Monkey) {
    monkey.hasEyesOpen = false
  }
}

interface Monkey {
  hasEyesOpen: boolean
}
