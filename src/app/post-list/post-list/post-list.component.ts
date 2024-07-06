import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  readonly panelOpenState = signal(false);
}
