import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, viewChild} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: "user-card",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss"
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit{

  @Input() name:string = "";
  @Input() email:string = ""; 

  @Output() sendData = new EventEmitter() // Para hacer Click, envia los datos al padre

  @ViewChild('buttonTest', {static: true}) buttonTest!: ElementRef
  @ViewChild('buttonShow', {static: true}) buttonShow!: ElementRef

    password: string = "";
    showButton: boolean = false;

  constructor() {
    console.log("user card constructor");
  }

  ngOnInit(): void {
    console.log("user card ngOnInit");
    this.buttonShow.nativeElement.textContent = 'button Show in OnInit'
    this.buttonTest.nativeElement.textContent = 'button Test in OnInit'
    //this.password = this.name + ' ' + this.email + ' PASSWORD'
  }

  
  ngOnDestroy(): void {
    console.log("User card Destroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES: ", changes);
    this.password =
    changes["name"].currentValue +
    changes["email"].currentValue +
    " PASSWORD";
}

ngDoCheck(): void {
  console.log("DO CHECK user card");
}

ngAfterContentInit(): void {
  console.log("NG After CONTENT INIT");
}

ngAfterViewInit(): void {
  console.log("NG AFTER VIEW INIT");
  console.log("BUTTON TEST", this.buttonTest);
  if(this.buttonTest){
    this.buttonTest.nativeElement.textContent = 'button Test in After View Init'
  }
}
 

  public onSendData(){
    //console.log('onSendData in child')
    this.sendData.emit("Hi from child component")
  }

}