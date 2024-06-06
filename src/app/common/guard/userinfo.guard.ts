import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/pages/auth.service';
import { inject } from '@angular/core';

export const userinfoGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  const router = inject(Router);

  if (token) {
    (await auth.verifyToken(token)).subscribe({
      next: () => {},
      error: (error) => {
        console.error('Error al obtener la información del usuario:', error);
        return false;
      },
    });
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;
  }
};
