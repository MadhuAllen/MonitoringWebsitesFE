import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MonitorServiceService } from '../service/monitor-service.service';

@Component({
  selector: 'app-monitor-websites',
  templateUrl: './monitor-websites.component.html',
  styleUrls: ['./monitor-websites.component.css']
})
export class MonitorWebsitesComponent implements OnInit {

  constructor(
    private monitorService: MonitorServiceService,
    ) { }

  ngOnInit(): void {
    this.getAllWebsites();
    this.getAllWebsitesStatus();
  }
  url!:string;
  website:any=[];
  getAllWebsites() {
    this.monitorService.getAllWebsites().subscribe(
      (response: any) => {
        console.log(" data ==>", response);
        this.website=response;
      }
    );
  }
  addWebsite(url:string){
    this.monitorService.addWebsite(url).subscribe(
      (response: any) => {
        console.log("Working==>",response);
        this.url="";
        this.getAllWebsites();
      }
    );

  }

  getAllWebsitesStatus(){
    setInterval(() => {
    this.monitorService.getAllWebsitesStatus().subscribe(
      (response: any) => {
        console.log(" data ==>", response);
        this.website=response;
      }
    );
    }, 120000); // Check every 2 minutes
  }
}

