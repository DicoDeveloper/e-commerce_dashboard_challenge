import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-splash',
  templateUrl: 'splash.component.html',
  styleUrls: ['splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    document.body.style.background = '#2459ff';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';
    document.body.style.overflow = 'hidden';
  }

}
