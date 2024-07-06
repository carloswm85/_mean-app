import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  readonly panelOpenState = signal(false);

  /* posts = [
    { title: 'FIRST Post', content: " This is the FIRST post's content" },
    { title: 'SECOND Post', content: " This is the SECOND post's content" },
    { title: 'THIRD Post', content: " This is the THIRD post's content" },
  ]; */
  posts: Post[] = [];
}

