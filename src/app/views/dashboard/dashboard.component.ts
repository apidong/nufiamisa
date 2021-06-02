import { Component, OnInit } from '@angular/core';



@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  rekap_pagu: any;
  profil: any;

  constructor(



  ) { }


  ngOnInit(): void {
    this.get_profil()
  }



  get_profil() {

  }
}
