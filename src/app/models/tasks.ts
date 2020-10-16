export class Task{
    /* Ici, je définis ce à quoi correspond une tache*/
    id : number = Date.now();
    title: string;
    status = false;
    dueDate?: number;/*le ? signifie facultatif */

}