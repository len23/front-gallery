import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/models/photo';
import { PublicFeedService } from '../public-feed.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  photos?: Array<Photo>;
  selectedPhoto!: Photo;

  constructor(private publicFeedService: PublicFeedService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.publicFeedService.getFeed().subscribe(photos => this.photos = photos);
  }

  searchPhotos(term: string): void {
    this.publicFeedService.searchPhotos(term).subscribe(photos => {
      this.photos = photos.length > 0 ? photos : undefined
    });
  }

  selectPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }
}
