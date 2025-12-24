import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experience = [
    {
      year: 'Apr 2021 – Oct 2025 | Pune, India',
      title: 'Senior Frontend Developer',
      company: 'Infosys Ltd',
      description: '.',
      points: [
      'Built chat modules, predictive dashboards, smart filters, and analytics UI.',
      'Worked with ML + Backend teams on real-time, data-heavy features.',
      'Implemented lazy loading, standalone components, and modular architecture.',
      'Improved UX consistency and accessibility across major modules.',
      'Used Sentry, logging dashboards, and performance tools for production monitoring.'
    ],
    },

  ];

   education = [
    {
      year: '2020-2021',
      degree: 'Bachelor of Computer Engineering',
      institute: 'Sir Visvesvaraya Instituteof Tecknology',
      grade: 'Grade: First Class Distinction'
    },
    {
      year: '2016-2017',
      degree: 'Higher Secondary School',
      institute: 'Janta Vidyalaya',
      grade: 'Grade: First Class Distinction'
    }
  ];
   downloadCV() {
    window.open('assets/CV.pdf', '_blank');
  }
}
