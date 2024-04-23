import { Component, signal } from '@angular/core';
// interface
import { IExperiences } from '../../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:'Front-end ',
        p:'Nível intermediário'
      },
      text:'Cursando o último semestre da faculdade de análise e desenvolvimento de sistema.'
    }
])
}
