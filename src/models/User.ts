export class User {
    id!:number;
    firstName!: string ;
    addPermission!: string ;
    password!:string;
    role!: string;
    createdAt!: Date | null;
    //completed!: boolean;

   constructor(id:number , password : string , role : string, firstName : string,addPermision : string ){
       this.id = id;
       this.firstName = firstName;
       this.addPermission = addPermision
        this.password = password;
         this.role = role;
         //this.createdAt = new Date()
   }
}
