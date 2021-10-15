import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/models/photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  @Input() photo!: Photo;

  constructor() { }

  ngOnInit(): void {
    this.photo = {
      id: '',
      title: '',
      image_link: '',
      tags: '',
    }
  }

}
