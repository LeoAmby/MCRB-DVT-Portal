import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
  standalone:true,
})
export class Learning { 
    username="";
    color = 'orange';

    // getUserName(event: Event){
    //   console.log(event);

    // }
    handleColor(val:string){
      console.log("Button clicked");
      this.color=val;
    }


    changeColor(event:Event ){
    this.color = (event.target as HTMLInputElement).value
    }
}
