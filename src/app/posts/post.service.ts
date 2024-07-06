import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];

  constructor() {}

  /**
   * Method to get the list of posts. The spread operator (...) creates a shallow copy
   * of the posts array, ensuring that the original array cannot be modified by
   * the caller of this method.
   *
   * @returns A copy of the posts array.
   */
  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string): Post {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    return post;
  }
}
