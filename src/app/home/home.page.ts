import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  myArray = [];
  loadingText = "Loading...";
  isLoading = false;
  isHide = true;


  constructor(private router: Router, private authenticatService: AuthenticationService, private dataService: DataService, private cdr: ChangeDetectorRef) {
    console.log(this.dataService.canProceed);
  }
  
  async showObject(){
    try {
      this.isLoading = true;
      if (this.isLoading == true) {
        this.isHide = false;
        this.myArray = await this.dataService.fetchData1();
        console.log(this.myArray);
      }
      this.isHide = true;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  clickUnauthenticate(){
    this.dataService.canProceed = false;
    console.log('Successfully Unauthenticate!');
    this.isHide = false;
  }

  clickAuthenticate() {
    this.dataService.canProceed = true;
    console.log('Successfully Authenticate!');
    this.isHide = false;
  }

  async addObject(){
    const nextNumber = this.myArray.length + 1;
    this.dataService.addToMyArray(nextNumber);
    this.isHide = false;
  }

}
