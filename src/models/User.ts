export class User {
    id!:number;
    password!:string;
    role!: string;
    createdAt!: Date;
    //completed!: boolean;

   constructor(id:number , password : string , role : string ){
       this.id = id;
        this.password = password;
         this.role = role;
   }
}
