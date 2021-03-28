import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jaded-button',
  templateUrl: './jaded-button.component.html',
  styleUrls: ['./jaded-button.component.css']
})
export class JadedButtonComponent implements OnInit {
  @Input() buttonText:string;
  @Input() customStyles:any = {};
  @Output() clicked:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(event:any){
    this.clicked.emit(event);
  }
}
