import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  constructor(private api:ApiServiceService){}
  name=""
  friendNickName=""
  DescribeYourFriend=""

  readValue= () =>
  {
   let data:any={
    "name":this.name,
    "friendNickName":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend
   }
   this.api.sendData(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Added")
        this.name=""
        this.friendNickName=""
        this.DescribeYourFriend=""
      }else{
        alert("invalid ")
      }

    }
   )

  }
  
}
