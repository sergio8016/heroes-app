import {Injectable} from '@angular/core';
import {UserInterface} from "../interfaces/user.interface";
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: UserInterface[] = [
    {
      id: 0,
      user: 'Default',
      email: 'default.hero@heroesapp.com'
    }
  ]
  private user!: UserInterface | undefined;

  constructor() {
  }

  get currentUser(): UserInterface | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<UserInterface | undefined> {
    return of(this.users)
      .pipe(
        map((users: UserInterface[]) => users.find((user: UserInterface): boolean => user.email === email)),
        tap((user: UserInterface | undefined) => {
          if (user) {
            this.user = user;
            localStorage.setItem('token', String(user.id))
          }
        })
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
