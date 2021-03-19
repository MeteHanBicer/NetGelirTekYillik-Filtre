import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netgelirtekyillik',
  templateUrl: './netgelirtekyillik.component.html',
  styleUrls: ['./netgelirtekyillik.component.css']
})
export class NetgelirtekyillikComponent implements OnInit {

yil:any=false;
tapualani:any=false;
yong:any=false;
  constructor() { }
  ngOnInit() {
  }
alert(il:string,ilce:string,mahalle:string,ada:any,parsel:any,nitelik:any,kurusulu:string){
  alert("İL : "+il+" İLÇE : "+ilce+" MAHALLE : "+mahalle+" ADA : "+ada+" PARSEL : "+parsel+" NİTELİK : "+nitelik+" KURU/SULU : "+kurusulu);
}
}
