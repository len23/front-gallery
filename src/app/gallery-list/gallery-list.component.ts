import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/models/photo';
import { PublicFeedService } from '../public-feed.service';

enum STATUS {
  LOADING = 'Loading ...',
  SERVER_ERROR = 'Unable to connect to the server'
};

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  photos?: Array<Photo>;
  selectedPhoto!: Photo;
  message?: string;

  constructor(private publicFeedService: PublicFeedService) { }

  ngOnInit() {
    this.getPhotos();
  }

  // Get random photos in the initial load
  getPhotos(): void {
    this.message = STATUS.LOADING; //Changing the status message to loading
    this.publicFeedService.getFeed().subscribe(results => {
      this.treatResults(results)
    });
  }

  // Get the result photos searched by tags 
  searchPhotos(term: string): void {
    this.message = STATUS.LOADING; //Changing the status message to loading
    this.publicFeedService.searchPhotos(term).subscribe(results => {
      this.treatResults(results)
    });
  }

  // General funcion to manage the results from subscribes
  treatResults(results: Photo[] | any): void {
    if (results.error || !results.length) {
      this.message = results.error ? results.error : STATUS.SERVER_ERROR;
      return;
    }
    this.photos = results;
    this.message = undefined; //Changing the status message to undefined in order to can load the results
  }

  selectPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }
}
