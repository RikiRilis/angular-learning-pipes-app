import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = "rikirilis";
  public nameUpper: string = "RIKIRILIS";
  public nameTitle: string = "rIKI rIlIS";
  public customDate: Date = new Date();
}
