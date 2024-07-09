import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MaterialModule, CommonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  post: Post | undefined;

  constructor(public postsService: PostsService) {}

  async onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // From the actual #postForm="ngForm" DOM object
    // "name"="content" provides `form.value.content`
    this.post = await this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
