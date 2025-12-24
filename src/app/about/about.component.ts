import { KeyValuePipe, NgFor, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, KeyValuePipe, TitleCasePipe, MatTabsModule,
    MatProgressBarModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  selectedTab = 0;

setTab(index: number) {
  this.selectedTab = index;
}
 skills = {
    technical: [
      { name: 'Angular 13+ & TypeScript', value: 95 },
      { name: 'RxJS & State Management', value: 90 },
      { name: 'Performance Optimization', value: 92 }
    ],
    core: [
      { name: 'HTML / CSS / Bootstrap', value: 95 },
      { name: 'JavaScript', value: 85 },
      { name: 'Responsive Design', value: 90 },
      { name: 'AI / LLM Integration', value: 85 },
    ],
    // tools: [
    //   { name: 'Git / GitHub', value: 85 },
    //   { name: 'Postman', value: 80 },
    //   { name: 'VS Code', value: 90 },
    //   { name: 'Firebase / APIs', value: 75 }
    // ]
  };

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
