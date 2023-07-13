import { Component,  ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-smooth',
  templateUrl: './smooth.component.html',
  styleUrls: ['./smooth.component.css']
})
export class SmoothComponent {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  constructor() {

    // Initialize the camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0,0,0);
    this.renderer = new THREE.WebGLRenderer();
  }
  ngOnInit() {
    this.initScene();
    this.loadModel();
    this.animate();
  }
  private initScene() {
    /*const width = window.innerWidth;
    const height = window.innerHeight;*/

    // our scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xdddddd);

    // camera that look at our object
    this.camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight, 1, 5000);
    this.camera.rotation.y=45/180*Math.PI;
    this.camera.position.y=900;
    this.camera.position.z=1000;
    this.camera.position.x=900;
    this.camera.position.set(5,5,5);

    //scene renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    //controls for orbiting around the object
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.addEventListener('change',()=>{
      this.renderer.render(this.scene,this.camera)
    });
    controls.autoRotate=true;
    controls.enableZoom=true;
    controls.enablePan=true;
    controls.target.set(0,0,0);
    controls.update();

    // nice ambient light
    const ambientLight = new THREE.AmbientLight(0x404040,10 );
    this.scene.add(ambientLight);
     const directionallight= new THREE.DirectionalLight(0x404040,100);
     directionallight.position.set(0,1,0);
      directionallight.castShadow=true;
     this.scene.add(directionallight);

    const light = new THREE.PointLight(0x404040,100);
     light.position.set(0,500,-500);
    this.scene.add(light);

   const light2 = new THREE.PointLight(0x404040,100);
   light2.position.set(0,300,-500);
    this.scene.add(light2);

     const light3 = new THREE.PointLight(0x404040,100);
     light3.position.set(0,300,-500);
     this.scene.add(light3);

     const light4 = new THREE.PointLight(0x404040,10);
     light4.position.set(-500,300,500);
     this.scene.add(light4);
  }

    // load the object
    private loadModel() {
      const loader = new GLTFLoader();
      loader.load('assets/smoothteapot1.glb', (glb) => {
        const object = glb.scene;
        this.scene.add(object);
        object.position.set(0,0,0);

        // render the scene
        this.animate();

           
      });
    }
         private animate()
         {
          this.renderer.render(this.scene,this.camera)
          requestAnimationFrame(animate);
         }
}
