import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a web development student passionate about building modern web applications with Angular. Drawing from my background in other programming languages and frameworks, I bring a solid foundation of technical skills that accelerate my learning of this framework.';
}
