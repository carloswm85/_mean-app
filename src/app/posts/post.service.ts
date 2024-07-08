import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

/**
 * The @Injectable decorator marks this class as one that participates in the
 * dependency injection system. The 'providedIn: root' syntax means that
 * Angular will provide this service at the root level, making it a singleton
 * service available throughout the application.
 */
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // Private property to store an array of posts. The Post[] type indicates an array of Post objects.
  private posts: Post[] = [];
  // Subject to emit updates when posts are added or modified
  private postsUpdated = new Subject<Post[]>();

  /**
   * Method to get the list of posts. The spread operator (...) creates a shallow copy
   * of the posts array, ensuring that the original array cannot be modified by
   * the caller of this method.
   *
   * @returns A copy of the posts array.
   */
  getPosts() {
    // `...` makes a true copy of the posts
    return [...this.posts];
  }

  /**
   * Method to get an observable for post updates.
   * The `asObservable` method converts the Subject into an Observable,
   * which can be subscribed to by components to receive updates when posts change.
   *
   * This object will LISTEN but not EMIT.
   * @returns An Observable that emits updates to the posts array.
   */
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  /**
   * Method to add a new post to the posts array.
   * Creates a new Post object and adds it to the posts array.
   * Then, emits an update to the postsUpdated Subject with the new list of posts.
   *
   * @param title The title of the post.
   * @param content The content of the post.
   * @returns The newly created Post object.
   */
  addPost(title: string, content: string): Post {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    // `next` emits a new value
    this.postsUpdated.next([...this.posts]);
    return post;
  }
}
