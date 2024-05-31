import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-rentals';

  images = ['https://lh3.googleusercontent.com/p/AF1QipOgmrybFSei6mwT8GDx-PBL8V_WzOPP_3FJ_hOo=s1360-w1360-h1020',
    'https://lh3.googleusercontent.com/p/AF1QipNau5Gb14Dv65bMy1Sih74Ir5NbKKTSvWDY9Cxm=s1360-w1360-h1020',
    'https://lh3.googleusercontent.com/p/AF1QipOgmrybFSei6mwT8GDx-PBL8V_WzOPP_3FJ_hOo=s1360-w1360-h1020',
    'https://lh3.googleusercontent.com/p/AF1QipNau5Gb14Dv65bMy1Sih74Ir5NbKKTSvWDY9Cxm=s1360-w1360-h1020'
  ]
}
