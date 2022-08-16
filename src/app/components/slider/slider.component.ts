import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 
    this.autor = {
      nombre: 'Francisco virbes', 
      webSide: 'https://www.facebook.com/Virbes.DMCX/', 
      youtube: 'Victor Robles Web'
    };
  }

  ngOnInit(): void {
    $("#logo").click(function(e) {
      e.preventDefault();

      $("header").css("background", "green").css("height", "50px");

    });
    
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    // Lanzar evento cuando cargue el componente
    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event) {
    //console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
