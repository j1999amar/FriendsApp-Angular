import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {
  constructor(private api:ApiServiceService)
  {
    api.fetchData().subscribe(
      (response)=>{
        this.data=response

      }
     
    )
    
  }
data:any=[]

}
