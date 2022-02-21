import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LogAgentGuard implements CanActivate{
    constructor(private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //throw new Error("Method not implemented.");
        const role = localStorage.getItem("role");
        if(role =="agent"){
            this.router.navigateByUrl('/agentPage');
            return (false);
        }else{
        return(true);
        }
    }

}