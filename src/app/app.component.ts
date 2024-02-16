import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'csv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    public stateService: StateService,
    public themeService: ThemeService,
  ) { }

  isCollapsed = false;
}
