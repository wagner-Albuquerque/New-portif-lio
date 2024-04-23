import { Component, inject, signal } from '@angular/core';
  // interface
import { IProjects } from '../../../interface/IProjects.interface';
  // material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
  //enum
import { EDailogPanelClass } from '../../../enum/EDailogPanelClass.enum';
 //dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([{
    src: 'assets/img/projects/vfull.png',
    alt: 'Projeto vida fullStack',
    title: 'Vida FullStack',
    with: '100px',
    height: '51px',
    description:'Explore o fascinante mundo do desenvolvimento web!',
    links:[
      {
        name: 'conheça o blog',
        href: 'https://vidafullstack.com.br'
      }
    ]
  }])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDailogPanelClass.PROJECTS
    })
  }
}
