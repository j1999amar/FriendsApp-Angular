import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendNickName=""
  DescribeYourFriend=""

  readValue= () =>
  {
   let data:any=[{"_id":"628613a5fb68dd10d6f53366","name":this.name,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}]
  console.log(data)
  }
  
}
