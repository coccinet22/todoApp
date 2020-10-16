import { Component } from '@angular/core';
import { Task } from '../models/tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Ici la propriété "task" est de type "Task; 
  c'est à dire qu'elle prendra comme structure
  comme référence la classe Task*/
task = new Task();
tasks:Task[]=[
  {id:1, title:'Faire la vaisselle',status: true},
  {id:2, title:'Faire le linge',status: false},
  {id:3, title:'Faire les courses', status: true},
  {id:1, title:'Vider les poubelles', status: false}
];
  constructor() {}

}
