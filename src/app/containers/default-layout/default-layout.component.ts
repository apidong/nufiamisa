import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import { interval } from 'rxjs';

declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent  implements OnInit, AfterViewInit {

  public navItems = new Array();
  public sidebarMinimized = false;
  public element: HTMLElement = document.body;
  public tahun: any;

  private ratio_img = 2.974;
  private img_width = 1603;
  private svg: any;
  private background: any;
  private img_gb: any;
  private g_people: any;
  private img_people: any;
  private img_bus: any;
  private img_mobil: any;
  private g_kendaraan1: any;
  private g_kendaraan2: any;
  private img_gb1: any;

  constructor(

     private location: Location
  ) {  }

  ngOnInit(){

    var height = window.innerHeight;
    var width = window.innerWidth;

    var h_img = width / this.ratio_img;
    var scale_faktor = width / this.img_width;

    var ratio = (width / height);
    var top_bg = (height - h_img);

    if (top_bg < 0) {
      top_bg = 0;
    }

    this.svg = Snap( '#siang' );
    this.background = this.svg.group();
    this.img_gb = this.background.image('./assets/img/svg/awan.png', 0, 0, '100%',  '');
    this.img_gb1 = this.background.image('./assets/img/svg/kota3.png', 0, (top_bg - (38 * scale_faktor)), '100%',  '');
    this.img_gb = this.background.image('./assets/img/svg/bg.png', 0, top_bg, '100%',  '');

    this.g_kendaraan1 = this.svg.group();
    this.img_bus = this.g_kendaraan1.image('./assets/img/svg/bus.png', (1200 * scale_faktor), (top_bg + (343 * scale_faktor)), (226 * scale_faktor) ,  (79 * scale_faktor));
    // this.img_mobil = this.g_kendaraan1.image('./assets/img/svg/mobil1.png', (60 * scale_faktor), (top_bg + (343 * scale_faktor)), (226 * scale_faktor) ,  (79 * scale_faktor));

    this.g_people = this.svg.group();
    this.img_people = this.g_people.image('./assets/img/svg/people.png', (295 * scale_faktor), (top_bg +(300 * scale_faktor)), (1301 * scale_faktor),  (204 * scale_faktor));

    this.g_kendaraan1.transform('t-1724,0');
    this.animate_bus(width);
    interval(11000).subscribe(val => this.animate_bus(width));
  }
  ngAfterViewInit(){}

  public get_menu() {

  }

  animate_bus (target:any) {
    this.g_kendaraan1.animate({
      transform:'t'+target+',0'
    }, 20000,mina.linear,
      () => this.g_kendaraan1.transform('t-1724,0')
    );
  }






  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    console.log(event)

  }


}
