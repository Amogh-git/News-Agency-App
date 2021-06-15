import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  flag = 1;
  constructor() { }

  ngOnInit(): void {
    //this.FetchHeadlines();
  }
  setFlag(flag:number){
    this.flag=flag;
    localStorage.setItem('flag', JSON.stringify(this.flag));
  }
}
