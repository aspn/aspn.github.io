import Gl from './gl';
import Blob from './gl/Blob';

import gsap from 'gsap';

class App {
  constructor() {
    this.blobs = [];
    this.addBlobs();

    // Main animation tl
    this.tl = gsap.timeline({
      delay: 0.25,
    });

    this.tl
      .add(this.animBlobs(), '-=1.5');
  }

  addBlobs() {
    // size, speed, color, freq, density, strength, offset
    const blob1 = new Blob(5, 0.25, 0.5, 1.5, 0.05, Math.PI * 0);     

    blob1.position.set(0, 0, 0);
    blob1.rotation.set(-0.4, 0, 0.5);

    this.blobs = [blob1];
    
    Gl.scene.add(...this.blobs); 
  }

  animBlobs() {
    // Move Threejs Blobs
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'power3.inOut'
      },
    });

    const uniformAlphas = [
      this.blobs[0].mesh.material.uniforms.uAlpha,
    ];

    tl
      .from(this.blobs[0].position, { z: -5 })
      .from(uniformAlphas, {
        value: 0,
        stagger: 0.2,
        ease: 'power3.inOut'
      }, 0);

    return tl;
  }
}

new App();