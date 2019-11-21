import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  apiKey = 'AIzaSyCpWl0st5lVSuguKPDnzG54vkH8XNk0mYc';

  constructor(public http: HttpClient) { }

  getVideos() {

  }
}
