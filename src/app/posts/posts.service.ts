import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
   * The constructor initializes the service and injects the HttpClient service,
   * which is used to make HTTP requests to the server.
   *
   * @param http The HttpClient instance for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Method to get the list of posts from the server. It sends a GET request to the server,
   * retrieves the posts, and updates the local posts array. The spread operator (...) creates
   * a shallow copy of the posts array, ensuring that the original array cannot be modified by
   * the caller of this method.
   *
   * @returns A copy of the posts array.
   */
  getPosts() {
    // `...` makes a true copy of the posts
    /* return [...this.posts]; */
    this.http
      .get<{
        message: string;
        // Define here the posts[] typing
        posts: [{ title: string; content: string; _id: string }];
      }>('http://localhost:3000/api/posts')
      .pipe(
        map((postData) => {
          return postData.posts.map((post) => {
            return { title: post.title, content: post.content, id: post._id };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        // Emit the updated posts array
        this.postsUpdated.next([...this.posts]);
      });
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
   * Sends a POST request to the server to save the new post. Once the post is successfully
   * added to the server, it updates the local posts array and emits an update.
   *
   * @param title The title of the post.
   * @param content The content of the post.
   * @returns A Promise that resolves to the newly created Post object.
   */
  async addPost(title: string, content: string): Promise<Post> {
    const newPost: Post = { id: '', title: title, content: content };
    await this.http
      .post<{ message: string, postId: string }>('http://localhost:3000/api/posts', newPost)
      .subscribe((responseData) => {
        console.log(responseData.message);
        const postId = responseData.postId;
        newPost.id = postId;
        this.posts.push(newPost);
        // `next` emits a new value
        this.postsUpdated.next([...this.posts]);
      });
    return newPost;
  }

  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
      // IT IS NECESSARY TO SUBSCRIBE, so the request is sent
      .subscribe(() => {
        console.log('Deleted item (from PostsService)!');
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
}
