import { Pipe, PipeTransform, signal, WritableSignal } from '@angular/core';
import { from, interval, Subscription, zip } from 'rxjs';

@Pipe({
  name: 'typingText',
  pure: false,
  standalone: true
})
export class TypingTextPipe implements PipeTransform {
  text: WritableSignal<string> = signal('test')
  initValue = ''

  typingText: string = ''
  typingText$?: Subscription;

  generator(speed: number = 100) {
    this.typingText$ = zip(
      from(Array.from(this.initValue)),
      interval(speed),
      (character, _interval) => character
    ).subscribe((character) => { this.typingText += character })
  }

  transform(value: string, ...args: unknown[]) {
    if (this.initValue == '') {
      this.initValue = value;
      this.generator();
    }

    if (this.typingText.length >= this.initValue.length) {
      console.log('close typingText')
      this.typingText$?.unsubscribe()
    }

    return this.typingText;
  }

}
