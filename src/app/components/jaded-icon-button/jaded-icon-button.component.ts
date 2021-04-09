import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaded-icon-button',
  templateUrl: './jaded-icon-button.component.html',
  styleUrls: ['./jaded-icon-button.component.css']
})
export class JadedIconButtonComponent implements OnInit {
  @Input() customStyles:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
