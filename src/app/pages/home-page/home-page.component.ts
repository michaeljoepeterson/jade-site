import { Component, OnInit  } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router:Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  galleryClicked(event:any){
    this.router.navigate(['/posters']);
  }

  aboutClicked(event:any){
    this.viewportScroller.scrollToAnchor('about');
  }
}
