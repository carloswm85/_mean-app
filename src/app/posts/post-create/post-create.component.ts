import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { Post } from '../post.model';
import { CommonModule } from '@angular/common';

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

  // This information GOES TO the parent component
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(this.post);
  }
}
