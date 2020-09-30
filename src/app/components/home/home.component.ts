import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/Global-Data';
import {TopdataService} from '../../topdata.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
totalConfirmed= 0;
totalActive=0;
totalDeaths=0;
totalRecovered=0;
globalData : GlobalDataSummary[];
datatable = [];
chart={
  PieChart: "PieChart",
  ColumnChart: 'ColumnChart',
  height : 500,
  options:{
    animation:{
      duration: 1000,
      easing: 'out',
    },
    is3D: true,
  }
}


  constructor(private topdataService : TopdataService) { }
initChart(casetype :string){
  this.datatable=[];
  //this.datatable.push(["Country","Cases"])
  this.globalData.forEach(cs=>{
    let value : Number;
    if (casetype== 'c')
    if(cs.confirmed>2000)
    value=cs.confirmed

    if (casetype=='a')
    if(cs.active>2000)
    value=cs.active
    if (casetype=='d')
    if(cs.deaths>500)
    value=cs.deaths
    if (casetype=='r')
    if(cs.recovered>2000)
    value=cs.recovered
   this.datatable.push([
      cs.country, value
    ])
  })
  console.log(this.datatable);
 
   
    
};


  ngOnInit(): void {
    this.topdataService.getGlobalData()
    .subscribe(
      {
        next: (result)=>{
          console.log(result);
          this.globalData=result;
          result.forEach(cs=>{
            if (!Number.isNaN(cs.confirmed)){
            this.totalActive+=cs.active
            this.totalConfirmed+=cs.confirmed
            this.totalDeaths+=cs.deaths
            this.totalRecovered+=cs.recovered
          }
          })
          this.initChart('c');
        }
      }
    )
  }
updateChart(input : HTMLInputElement){
console.log(input.value);
this.initChart(input.value)
}
}
