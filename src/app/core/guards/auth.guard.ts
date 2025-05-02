import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = false; // Aquí deberías verificar con tu servicio de autenticación real

  if (!isLoggedIn) {
    // Si NO está logueado, redirige al login
    return router.parseUrl('/login');
  }

  // Si está logueado, permite entrar
  return true;
};
