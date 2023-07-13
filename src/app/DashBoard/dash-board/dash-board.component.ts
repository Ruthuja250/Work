import { Component,  ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import{TeapotGeometry} from 'three/examples/jsm/geometries/TeapotGeometry';
import { Material } from 'three';
import { SuggestedProduct } from 'src/app/Models/Models';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
  suggestedProducts : SuggestedProduct[] = [
    {
  banerimage : 'Baner/Baner_Mobile.png',
  category:{
    id:1,
    category:'teapot',
    subCategory:'Body',

  },
},
{
  banerimage : 'Baner/Baner_Chair.png',
  category:{
    id:2,
    category:'teapot',
    subCategory:'upperlid',
    
  },
},
{
  banerimage : 'Baner/Baner_Laptop.png',
  category:{
    id:3,
    category:'teapot',
    subCategory:'lowerlid',
    
  },
},
  ];
 constructor(){}
  
  ngOnInit(): void {
    
  }

  
  
}