import { Component, OnInit } from '@angular/core';
import {Note} from '../model/Note';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  notes: Note[];

  constructor(private blogService: BlogService) {
    const newNotes: Note[] = [];
    const note1 = new Note('description 1');
    const note2 = new Note('description 200000000000000000000000000000000000000000000000000000000000000000000000000000000000');

    newNotes.push(note1, note2);
    this.notes = newNotes;
  }

  ngOnInit() {
    // this.getNotes();
  }

  private getNotes(): void {
    this.blogService.getNotes().subscribe(notes => this.notes = notes);
  }
}
