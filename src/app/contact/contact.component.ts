import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sendMessage() {
    if(!this.name || !this.email || !this.message) return alert('Please fill all fields!');
    alert(`Thank you, ${this.name}! Your message has been sent.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
