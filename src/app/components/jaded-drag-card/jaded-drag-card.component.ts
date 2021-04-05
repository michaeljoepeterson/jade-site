import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jaded-drag-card',
  templateUrl: './jaded-drag-card.component.html',
  styleUrls: ['./jaded-drag-card.component.css']
})
export class JadedDragCardComponent implements OnInit {
  @Input() cardHeaderText:string = "";
  @Input() size:string = "";
  @Input() customStyles:any = {};
  @Input() cardClasses:any = {};
  @ViewChild('cardHeader') cardHeaderRef: ElementRef;
  baseCardClasses:any = {
    'jaded-card':true,
    'jaded-border':true,
    'jaded-background':true,
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
    private ref:ChangeDetectorRef
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

}
