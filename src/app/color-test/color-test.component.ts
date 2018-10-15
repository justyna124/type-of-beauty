import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-color-test',
  templateUrl: './color-test.component.html',
  styleUrls: ['./color-test.component.css']
})
export class ColorTestComponent implements OnInit {
  url: string;
  bgcolor: '#aaa';
  IsHiddenCold=true;
  IsHiddenWarm=true;
  colours={
    spring:['#57B5A2','#FF9E56','#F3A9A4','#006AA8','#FFE088','#23693B','#CFB095','#E62C2C','#FFC931','#BB6D1D'],
    summer:['#862A2E','#236933','#6A4253','#FFF367','#A4CCEE','#BB7AD4','#FF4178','#8EA878','#4FD5BC','#FF354B'],
    autumn:['#00836E','#8CA23B','#C9464F','#FFCE7F','#C68F55','#FFA676','#6990BC','#A64356','#63685F','#7E8A43'],
    winter:['#30592A','#687152','#ffffff','#000000','#343F5E','#949494','#E36CA4','#FF3E61','#EEFF8A','#314655'],
  };
  isHiddenSpring=true;
  isHiddenSummer=true;
  isHiddenAutumn=true;
  isHiddenWinter=true;

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  changeBg(color) {
    this.bgcolor = color;
  }
  showColdColours(){
    this.IsHiddenCold = false;
    this.IsHiddenWarm=true;
  }
  showWarmColours(){
    this.IsHiddenCold = true;
    this.IsHiddenWarm=false;
  }
  showSummerColours(){
    this.isHiddenSummer=false;
    this.isHiddenAutumn=true;
    this.isHiddenSpring=true;
    this.isHiddenWinter=true;
  }
  showWinterColours(){
    this.isHiddenSummer=true;
    this.isHiddenAutumn=true;
    this.isHiddenSpring=true;
    this.isHiddenWinter=false;
  }
  showSpringColours(){
    this.isHiddenSummer=true;
    this.isHiddenAutumn=true;
    this.isHiddenSpring=false;
    this.isHiddenWinter=true;
  }
  showAutumnColours(){
    this.isHiddenSummer=true;
    this.isHiddenAutumn=false;
    this.isHiddenSpring=true;
    this.isHiddenWinter=true;
  }
  constructor() { }

  ngOnInit() {

  }

}

