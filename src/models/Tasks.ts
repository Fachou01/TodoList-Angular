export class Tasks {
    id!:number;
    description!: string;
    createdAt!: Date;
    //completed!: boolean;

   constructor(content : string){
       this.description = content;
       //this.completed = completed;
   }
}
