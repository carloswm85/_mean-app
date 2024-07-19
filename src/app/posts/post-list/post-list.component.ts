import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, OnDestroy {
  readonly panelOpenState = signal(false);
  posts: Post[] = [];
  private postsSub!: Subscription;
  isLoading = false;

  /* posts = [
    { title: 'FIRST Post', content: " This is the FIRST post's content" },
    { title: 'SECOND Post', content: " This is the SECOND post's content" },
    { title: 'THIRD Post', content: " This is the THIRD post's content" },
  ]; */

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts(); // Trigger the posts from the server
    // ONLY LISTEN TO CHANGES
    // `subscribe` takes 3 possible arguments for: next, error or complete
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((emittedPosts: Post[]) => {
        this.isLoading = false;
        this.posts = emittedPosts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
}
