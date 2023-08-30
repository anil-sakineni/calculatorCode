import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
calValue:number=0;
funcT:any='noFunction';
calNumber:string='novalue'

firstNumber:number=0;
secondNumber:number=0;

onClickValue(val:string , type:any){
 if(type=='number'){
  this.onNumberClick(val)
 }

 else if(type=='function'){
  this.onFunctionClick(val)
 }
  
}

onNumberClick(val:string){
  if(this.calNumber!='novalue'){
    this.calNumber=this.calNumber+val

  }

  else{
    this.calNumber=val
  }
  this.calValue=parseFloat(this.calNumber)

}

onFunctionClick(val:string){

  // 'c' fuction call
  if(val=='c'){
    this.clearAll()
  }
  if(this.funcT=='noFunction'){
    this.firstNumber=this.calValue
    this.calValue=0;
    this.calNumber='novalue';
    this.funcT=val


  }

  else if(this.funcT!='noFunction') {
    this.secondNumber=this.calValue

    // calculate part

    this.valueCalculate(val)
    

  }

}

valueCalculate(val:string){
  if(this.funcT=='+'){
    const total=this.firstNumber+this.secondNumber
    this.totalAssignValues(total,val)
    if(val=='='){this.onEqualPress()}
  }
  if(this.funcT=='-'){
    const total=this.firstNumber-this.secondNumber
    this.totalAssignValues(total,val)
    if(val=='='){this.onEqualPress()}
  }
  if(this.funcT=='*'){
    const total=this.firstNumber*this.secondNumber
    this.totalAssignValues(total,val)
    if(val=='='){this.onEqualPress()}
  }
  if(this.funcT=='/'){
    const total=this.firstNumber/this.secondNumber
    this.totalAssignValues(total,val)
    if(val=='='){this.onEqualPress()}
  }
  if(this.funcT=='%'){
    const total=this.firstNumber%this.secondNumber
    this.totalAssignValues(total,val)
    if(val=='='){this.onEqualPress()}
  }
}

totalAssignValues(total:number,val:string){
  this.calValue=total
    this.firstNumber=total
    this.secondNumber=0
    this.calNumber='novalue'
    this.funcT=val

}
onEqualPress(){
  this.firstNumber=0;
  this.secondNumber=0;
  this.calNumber='novalue'
  this.funcT='noFunction'
}

clearAll(){
  this.firstNumber=0;
  this.secondNumber=0;
  this.calNumber='novalue';
  this.funcT='noFunction';
  this.calValue=0

}
}
