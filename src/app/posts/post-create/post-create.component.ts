import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MaterialModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  enteredValue1 = 'CONTENT 1';
  enteredValue2 = 'CONTENT 2';
  newPost1 = 'Empty 1';
  newPost2 = 'Empty 2';

  onAddPost1(postInput: HTMLTextAreaElement) {
    this.newPost1 = postInput.value;
  }
  onAddPost2() {
    this.newPost2 = this.enteredValue2;
  }
}
