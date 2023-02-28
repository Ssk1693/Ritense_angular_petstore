import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObject } from './petdata';
import { StatusService } from 'src/status.service';
import { Status } from 'src/status';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  petdataA: any;
  petdataS: any;
  petdataP: any;
  dropdownVal:any;
  isAvailable =true;
  isPending=false;
  isSold=false;


  public status:Status[];

  onChange(e:any)
  {
    this.dropdownVal=e;
  }
  ngOnInit():void
  {
this.statusService.getStatus
().subscribe(response=>
  {this.status=response;
    console.log(this.status);

  });
  this.getDataAvailable();
  this.getDataPending();
  this.getDataSold();

  }
   //dropdownVal:['pending','sold','available'];


constructor(private http: HttpClient, private statusService:StatusService, private router: Router) {}

btnClick () {
  console.log('navigate');
  this.router.navigate(['/add']);
};


getDataAvailable() {
  const url =
    'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';
  this.http.get(url).subscribe((res) => {
    this.petdataA=res;
    console.log(res);
  });
}
getDataPending() {
  const url =
    'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=pending';
  this.http.get(url).subscribe((res) => {
    this.petdataP=res;
    console.log(res);
  });
}
getDataSold() {
  const url =
    'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=sold';
  this.http.get(url).subscribe((res) => {
    this.petdataS=res;
    console.log(res);
  });
}





}
