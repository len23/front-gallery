import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicFeedService } from '../public-feed.service';

@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.scss']
})
export class PhotoSearchComponent implements OnInit {

  // Event sent from the gallery-list component parent
  @Output()
  searchClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private publicFeedService: PublicFeedService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.searchClicked.emit(term);
  }

}
