import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
  {
    title: 'Order Management System',
    description: 'Enterprise web app for managing financial records, inventory, and order workflows.',
    img: 'assets/images/proj_1.jpg'
  },
  {
    title: 'AI Support Chat Module',
    description: 'Real-time chatbot with LLM integration for customer support.',
    img: 'assets/images/proj_2.jpg'
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'Data visualization dashboard with smart filters & live metrics.',
    img: 'assets/images/proj_3.jpg'
  }
];

}
