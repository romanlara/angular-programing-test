import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imgs: string[] = [];
  counter = 0;

  @ViewChild('banner', {static: false}) banner: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.imgs[0] = 'https://magialmeria.com/wp-content/uploads/2017/07/Splash-Creative-Dark-Slider-Background.jpg';
    this.imgs[1] = 'https://www.sanitas.com/etc/designs/sanitas-core/img/stage-background.jpg';
    this.imgs[2] = 'https://pvrinstitute.org/media/1003/abstract-background.jpg';

    this.setImage();
  }

  forward() {
    this.counter = ++this.counter % this.imgs.length;
    this.setImage();
  }

  backward() {
    this.counter = (--this.counter < 0) ? (this.imgs.length - 1) : this.counter;
    this.setImage();
  }

  setImage() {
    this.renderer.setAttribute(this.banner.nativeElement, 'src', this.imgs[this.counter]);
  }
}
