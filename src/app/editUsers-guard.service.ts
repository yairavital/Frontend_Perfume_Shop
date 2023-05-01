import { usersService } from 'src/app/users.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(private usersServ: usersService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.usersServ.ReturnUserLogin().name == 'admin') return true;
    else {
      this.route.navigate(['/home']);

      return false;
    }
  }
}
