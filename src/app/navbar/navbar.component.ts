import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  activeSection = 'home-section';
  closeMenu() {
  const nav = document.getElementById('ftco-nav');
  if (nav && nav.classList.contains('show')) {
    nav.classList.remove('show');
  }
}


  // ngAfterViewInit() {
  //   const sections = document.querySelectorAll('section[id]');

  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.activeSection = entry.target.id;
  //       }
  //     });
  //   }, {
  //     rootMargin: '-45% 0px -45% 0px'
  //   });

  //   sections.forEach(section => observer.observe(section));
  // }
}
