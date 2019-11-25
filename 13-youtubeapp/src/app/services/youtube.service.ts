import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCpWl0st5lVSuguKPDnzG54vkH8XNk0mYc';
  private playList = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(public http: HttpClient) { }

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems?part=snippet&maxResults=10&playlistId=${this.playList}&key=${this.apiKey}`;

    return this.http.get(url).pipe(map((res: Response) => {
      console.log(res);
    }));
  }
}
