import { Component, OnInit } from '@angular/core';
class myimg{
  1:string;
  2:string;
  3:string;
  4:string;
  5:string;
  6:string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit{
  DisplayArray: myimg = new myimg()
  constructor() { }
  nextArray(){
    console.log(this.DisplayArray ,"before")

var getCurrentValue =  parseInt(localStorage.getItem("currentValue"))
if(getCurrentValue <12){

var a = 1 + getCurrentValue
var b = 2 + getCurrentValue
var c = 3 + getCurrentValue
var d = 4 + getCurrentValue
var e = 5 + getCurrentValue
var f = 6 + getCurrentValue
this.DisplayArray[1] = '../../assets/'+a + '.jpeg'
    this.DisplayArray[2]= '../../assets/'+b + '.jpeg'
    this.DisplayArray[3] ='../../assets/'+c + '.jpeg'
    this.DisplayArray[4] ='../../assets/'+d+ '.jpeg'
    this.DisplayArray[5] ='../../assets/'+e + '.jpeg'
    this.DisplayArray[6] ='../../assets/'+f + '.jpeg'
    localStorage.setItem("currentValue",f.toString() )  
    console.log(this.DisplayArray ,"after")
  }
}
  prevArray(){
   

var getCurrentValue =  parseInt(localStorage.getItem("currentValue"))
if(getCurrentValue >6){
  console.log(getCurrentValue ,"before")

  var a =  getCurrentValue -6
  var b =  getCurrentValue -7
  var c =  getCurrentValue -8
  var d =  getCurrentValue -9 
  var e =  getCurrentValue -10  
  var f =getCurrentValue  - 11 
     this.DisplayArray[1] = '../../assets/'+f + '.jpeg'
      this.DisplayArray[2]= '../../assets/'+e + '.jpeg'
      this.DisplayArray[3] ='../../assets/'+d + '.jpeg'
      this.DisplayArray[4] ='../../assets/'+c+ '.jpeg'
      this.DisplayArray[5] ='../../assets/'+b + '.jpeg'
      this.DisplayArray[6] ='../../assets/'+a + '.jpeg'
      localStorage.setItem("currentValue",a.toString() )  
      console.log(this.DisplayArray ,"after")
}

  }
  ngOnInit(): void {
    this.DisplayArray[1] = '../../assets/1.jpeg'
    this.DisplayArray[2]= '../../assets/2.jpeg'
    this.DisplayArray[3] ='../../assets/3.jpeg'
    this.DisplayArray[4] ='../../assets/4.jpeg'
    this.DisplayArray[5] ='../../assets/5.jpeg'
    this.DisplayArray[6] ='../../assets/6.jpeg'
      localStorage.setItem("currentValue",'6')
    console.log(this.DisplayArray)
  }

}
