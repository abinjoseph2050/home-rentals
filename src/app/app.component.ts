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

  images = [
    { url: '../assets/images/bayou4.jpg', heading: 'Tranquil Waters', desc: 'Enjoy serene moments by the calm waters surrounded by lush, moss-draped trees.' },
    { url: '../assets/images/bayou6.jpg', heading: 'Cozy Deck', desc: 'Relax on our cozy deck with picturesque views of the surrounding nature and water.' },
    { url: '../assets/images/bayou8.jpg', heading: 'Camp Fire', desc: "Gather around the warm campfire for an evening of stories, s'mores, and stargazing." },
    { url: '../assets/images/bayou1.jpg', heading: 'Western Lodging', desc: 'Experience a unique stay in our themed western lodgings, blending rustic charm with modern comfort.' }
  ]
}
