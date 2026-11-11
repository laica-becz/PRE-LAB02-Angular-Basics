import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Bianca Ellise C. Zepeda';
  location = 'Porac, Pampanga';
  email = 'zepedabiancaellise@gmail.com';
  phone = '0999 179 7769';
  linkedinUrl = 'https://www.linkedin.com/in/bianca-ellise-zepeda';
  githubUrl = 'https://github.com/laica-becz';

  profile = 'Third-year BSIT student specializing in web development. Experienced in building full-stack web applications using both traditional PHP/MySQL and the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). Competent in setting up local container environments with Docker and deploying functional sites to Vercel and Render. Looking for an entry-level development or internship role where I can contribute to backend logic and database workflows.';

  skills = [
    'HTML5 and CSS3',
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'Bootstrap',
    'Tailwind CSS',
    'Figma',
    'Node.js and Express.js',
    'PHP',
    'MySQL and MongoDB Atlas',
    'Docker',
    'Vercel',
    'Replit',
    'Render',
    'Xampp',
    'Git/GitHub',
    'Python and Java',
    'Angular'
  ];

  certification = [
    'Back-End Development and APIs V8 - freeCodeCamp',
    'Responsive Web Design V8 - freeCodeCamp',
    'JavaScript Algorithms and Data Structures V7 - freeCodeCamp',
    'Endpoint Security - Cisco Networking Academy (HAU-SOC) | Oct 2025',
    'JavaScript Essentials 1 - Cisco Networking Academy (HAU-SOC) | Oct 2025',
    'Introduction to Graphic Design & Basics of UI/UX - Simplilearn SkillUp | Aug 2026',
    'Website UI/UX Designing using ChatGPT - Simplilearn SkillUp | Aug 2026',
    'Introduction to Figma Course - Simplilearn SkillUp | Sep 2025'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
