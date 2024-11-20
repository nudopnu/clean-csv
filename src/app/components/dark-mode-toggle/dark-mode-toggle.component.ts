import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css'
})
export class DarkModeToggleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.id = 'app-theme';
      themeLink.rel = "stylesheet";
      themeLink.type = "text/css";
      themeLink.href = "default.css";
      document.head.appendChild(themeLink);
    }
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      themeLink.href = 'dark.css';
      this.themeToggleLightIconElementRef.nativeElement.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark')
      themeLink.href = 'default.css';
      this.themeToggleDarkIconElementRef.nativeElement.classList.remove('hidden');
    }
  }

  @ViewChild('themeToggleDarkIcon') themeToggleDarkIconElementRef!: ElementRef;
  @ViewChild('themeToggleLightIcon') themeToggleLightIconElementRef!: ElementRef;

  toggleDarkMode() {
    // toggle icons inside button
    this.themeToggleDarkIconElementRef.nativeElement.classList.toggle('hidden');
    this.themeToggleLightIconElementRef.nativeElement.classList.toggle('hidden');

    // if set via local storage previously
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        themeLink.href = 'dark.css';
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        themeLink.href = 'default.css';
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }
}
