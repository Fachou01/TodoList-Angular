import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate{
    constructor(private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //get token from local storage
        const token = localStorage.getItem("token");
        if(!!token ==false){
            this.router.navigateByUrl('/error');
            return (false);
        }else{
        return(true);
        }
    }

}