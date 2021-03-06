import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {}

  title = 'AngularMaterial';

  onDarkModeChange(isChecked: boolean) {
    const theme = isChecked ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }
}
