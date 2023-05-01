import { usersService } from 'src/app/users.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class OrderConfirmGuardService implements CanActivate {
  constructor(public usersServ: usersService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.usersServ.checkLoginFromLocal()) return true;
    else {
      this.route.navigate(['/home']);
      return false;
    }
  }
}
