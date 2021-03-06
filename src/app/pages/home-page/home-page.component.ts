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
    this.viewportScroller.scrollToAnchor('gallery');
  }

  aboutClicked(event:any){
    this.viewportScroller.scrollToAnchor('about');
  }

  sectionClicked(section:string){
    this.viewportScroller.scrollToAnchor(section);
  }
}
