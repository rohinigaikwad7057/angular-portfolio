import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent {
  isOpen = false;
  inputMessage = '';
  messages: { user?: string; bot?: string }[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.inputMessage.trim()) return;

    const userText = this.inputMessage;
    const msg = userText.toLowerCase();
    this.messages.push({ user: userText });
    this.inputMessage = '';

    let reply = 'Sorry, I didn’t understand. Ask about skills, projects, resume or contact details.';

    if (msg.includes('skill')) {
      reply = 'I specialize in Angular, TypeScript, RxJS, REST APIs, HTML, CSS, Bootstrap & UI development.';
    }
    else if (msg.includes('education') || msg.includes('study') || msg.includes('degree')) {
      reply = 'I have completed my Bachelor’s degree in Computer Science and have strong academic foundation in web technologies and software engineering.';
    }

    else if (msg.includes('backend')) {
      reply = 'I work with Node.js, Express.js and MongoDB for backend API development.';
    }
    else if (msg.includes('project')) {
      reply = 'My live project is Smart Appointment Scheduler – Angular + Node.js based appointment system.';
    }
    else if (msg.includes('contact')) {
      reply = 'Email: rohinigaikwad7057@gmail.com | Phone: +971 547 031 062 | Location: Abu Dhabi';
    }
    else if (msg.includes('resume')) {
      reply = 'I am Rohini Gaikwad – Frontend Developer with 3+ years of experience in Angular UI systems.';
    }
    else if (msg.includes('hire') || msg.includes('job')) {
      reply = 'Yes, I am available for Frontend / Angular roles. I am currently in Abu Dhabi on spouse visa.';
    }

    this.messages.push({ bot: reply });
  }
}

