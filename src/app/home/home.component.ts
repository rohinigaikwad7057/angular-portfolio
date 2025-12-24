import { Component } from '@angular/core';
import * as AOS from 'aos';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { AiChatComponent } from '../ai-chat/ai-chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet,HeaderComponent,AboutComponent,SkillsComponent,ProjectsComponent,ExperienceComponent,ContactComponent,AboutComponent,HomeComponent,AiChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
ngOnInit() {
    AOS.init({ duration: 1200 });
  }
  typingTexts: string[] = ['Frontend Developer', 'UI Designer', 'Angular Dev'];

  ngAfterViewInit(): void {
    this.startTypingAnimation(0);
  }

  startTypingAnimation(index: number): void {
    const element = document.getElementById('typing-animation');
    if (!element) return;

    element.textContent = '';
    const text = this.typingTexts[index];

    [...text].forEach((char, i) => {
      setTimeout(() => {
        element.textContent += char;
      }, i * 150);
    });

    setTimeout(() => {
      this.startTypingAnimation((index + 1) % this.typingTexts.length);
    }, text.length * 200);
  }
}
