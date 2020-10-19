import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'hi kong'
  constructor(private router : Router) {}

   open_Page(){
     this.router.navigateByUrl('/details');
   }


}
