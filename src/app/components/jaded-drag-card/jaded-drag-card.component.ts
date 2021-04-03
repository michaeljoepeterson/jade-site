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
  @ViewChild('cardHeader') cardHeaderRef: ElementRef;

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
