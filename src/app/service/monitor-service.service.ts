import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitorServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllWebsites(){
    return this.httpClient.get(environment.apiUrl+'get_all_websites/');
  }

  addWebsite(url: string) {
    return this.httpClient.post(environment.apiUrl+'add_website/', url);
  }

  getAllWebsitesStatus(){
    return this.httpClient.get(environment.apiUrl+'get_all_websites_updated_status/');
  }


}
