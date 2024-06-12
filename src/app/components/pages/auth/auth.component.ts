import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthDataService } from '../../../core/services/data-sharing/auth-data/auth-data.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(
    private authDataService: AuthDataService,
    private cdr: ChangeDetectorRef
  ) {}

  pageTitle!: string;

  getPageTitle() {
    this.authDataService
    .pageTitle
    .subscribe({
      next: (pageTitle: string) => {
        if (pageTitle) {
          this.pageTitle = pageTitle;
          this.cdr.detectChanges();
        }
      }
    })
  }

  ngOnInit() {
    this.getPageTitle();
  }

}
