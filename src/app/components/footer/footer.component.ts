import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  homeClicked(event:any){
    event.preventDefault();
    this.viewportScroller.scrollToPosition([0,0]);
  }

  sectionClicked(section:string,event:any){
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(section);
  }
}
