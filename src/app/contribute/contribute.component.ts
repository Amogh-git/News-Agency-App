import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showPreviewOne(event:any){
    console.log('hh');
  if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview:any = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  } 
}
}
