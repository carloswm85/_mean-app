import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

/* It adds information about the client route we are currently on */
import { ActivatedRoute } from '@angular/router';

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
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  private mode = 'create';
  private postId: string | null;
  public post: Post | undefined;

  // =============================================================== CONSTRUCTOR
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
  ) {}

  // ================================================================ LIFE CYCLE
  ngOnInit(): void {
    // Find out what is happening in the client routes, using an Observable
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId')!;
        this.postsService.getPost(this.postId).subscribe((postData) => {
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
          };
        });
      } else {
        this.post = { id: '', title: '', content: '' };
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  // =========================================================== PRIVATE METHODS
  async onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.post = await this.postsService.addPost(
        form.value.title,
        form.value.content
      );
    } else {
      this.post = await this.postsService.updatePost(
        this.postId!,
        form.value.title,
        form.value.content
      );
    }
  }
}
