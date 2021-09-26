import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-splash',
  templateUrl: 'splash.component.html',
  styleUrls: ['splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly _snackBar: MatSnackBar,
    private readonly router: Router,
  ) { }

  async ngOnInit() {
    document.body.style.background = '#2459ff';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';
    document.body.style.overflow = 'hidden';

    try {
      const success = await this.authService.getToken();
      if (!success) {
        this._snackBar.open('Erro ao obter token da API', 'Ok', { duration: 4000, });
        return;
      }
      // Código apenas para simular um carregamento de pagina com logo
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    }
    catch (exception) {
      this._snackBar.open(exception, 'Ok', { duration: 4000, });
    }
  }

}
