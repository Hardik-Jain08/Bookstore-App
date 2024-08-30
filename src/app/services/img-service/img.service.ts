import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private images: string[] = [
    'assets/images/image1_2x.png',
    'assets/images/image2_2x.png',
    'assets/images/image3_2x.png',
    'assets/images/image4_2x.png',
    'assets/images/image5_2x.png',
    'assets/images/image6_2x.png',
    'assets/images/image7_2x.png',
    'assets/images/image8_2x.png',
    'assets/images/image9_2x.png',
    'assets/images/image10_2x.png'
  ];

  constructor() { }

  getRandomImage(): { id: number, path: string, other_path: string } {
    const id = Math.floor(Math.random() * this.images.length) + 1;
    return { id, path: this.images[id - 1], other_path: this.images[id%10] };
  }

  getImageById(id: number): string | null {
    if (id >= 1 && id <= this.images.length) {
      return this.images[id - 1];
    }
    return null;
  }
}
