import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
//   { path: '', redirectTo: 'about', pathMatch: 'full' },
//   { path: 'about', component: AboutComponent },
//   { path: 'skills', component: SkillsComponent },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'experience', component: ExperienceComponent },
//   { path: 'ai-chat', component: AiChatComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', redirectTo: 'about' }
// const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
// ];
