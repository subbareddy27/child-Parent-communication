import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input() _ChildCom: any;

  @Output() _OnChildCom = new EventEmitter<any>();

  _EventValue(){
    this._OnChildCom.emit('This is Value EventEmitter');
  };
};
