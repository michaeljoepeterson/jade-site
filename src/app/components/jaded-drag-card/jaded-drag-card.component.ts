import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jaded-drag-card',
  templateUrl: './jaded-drag-card.component.html',
  styleUrls: ['./jaded-drag-card.component.css']
})
export class JadedDragCardComponent implements OnInit {
  @Input() cardHeaderText:string = "";
  @Input() size:string = "";
  @Input() linkTo:string = null;
  @Input() customStyles:any = {};
  @Input() cardClasses:any = {};
  @ViewChild('cardHeader') cardHeaderRef: ElementRef;
  baseCardClasses:any = {
    'jaded-card':true,
    'jaded-border':true,
    'jaded-background':true,
  };

  hovered:boolean = false;
  hoveredButtonStyles:any = {
    color:'white',
    backgroundColor:'#3C7152',
    borderColor:'white'
  };

  @HostListener("window:resize",["event"])
  onResize(event:any){
    try{
      if(this.footerStyles.height !== this.cardHeaderRef.nativeElement.offsetHeight){
        this.setFooterHeight(this.cardHeaderRef.nativeElement.offsetHeight);
      }
    }
    catch(e){
      console.warn(e);
    }
  }

  footerStyles:any = {};

  constructor(
    private ref:ChangeDetectorRef,
    private router:Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.initClasses(this.cardClasses);
  }

  initClasses(inputClasses:any){
    this.cardClasses = {...this.baseCardClasses};
    if(this.size === 'small'){
      this.cardClasses['jaded-card-small'] = true;
    }
    else if(this.size === 'medium'){
      this.cardClasses['jaded-card-medium'] = true;
    }
    else if(this.size === 'large'){
      this.cardClasses['jaded-card-large'] = true;
    }

    for(let key in inputClasses){
      this.cardClasses[key] = true;
    }
  }

  ngAfterViewInit(){
    if(!this.footerStyles.height){
      this.setFooterHeight(this.cardHeaderRef.nativeElement.offsetHeight);
    }
  }

  setFooterHeight(height:number){
    this.footerStyles.height = height + 'px';
    this.ref.detectChanges();
  }

  linkToPage(){
    if(this.linkTo){
      this.router.navigate([this.linkTo]).then(resp => {
        this.viewportScroller.scrollToPosition([0,0]);
      });
    }
  }

  enter(){
    if(this.linkTo){
      this.cardClasses['jaded-background-hover'] = true;
      this.hovered = true;
    }
  }

  exit(){
    this.cardClasses['jaded-background-hover'] = false;
    this.hovered = false;
  }
}
