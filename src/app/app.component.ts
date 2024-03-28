import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule, MatTabsModule, MatIconButton, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  title = 'frontendv2';
  showSidenav: boolean = false;
  isXSmallScreen: boolean = false;
  destroyed = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (this.isXSmallScreen !== result.matches) {
          this.isXSmallScreen = result.matches;
          console.log('isXSmallScreen changed:', this.isXSmallScreen);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  handleShowSidenav(): void {
    this.showSidenav = !this.showSidenav;
    console.log('Salut');
  }
}
