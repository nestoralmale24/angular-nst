import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username:string = "Nst"
}
