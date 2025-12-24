import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeSection = 'home-section';

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = [
      'home-section',
      'about-section',
      'resume-section',
      'project-section',
      'contact-section'
    ];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection = section;
        break;
      }
    }
  }
}

