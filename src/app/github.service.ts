/* Custom service for retrieving my GitHub repos for display. */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubApiUrl = "https://api.github.com/users/collin-matz/repos";
  private cache: any[] = [];  // cache the data to avoid re-fetching every time

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any[]> {
    if (this.cache.length > 0) {
      // check to see if the cache has data
      return of(this.cache);
    }

    try {
      return this.http.get<any[]>(this.githubApiUrl).pipe(
        mergeMap((repos) => {
          // for each repo, get the languages url
          const requests = repos.map((repo) => {
            if (repo.languages_url) {

              // make a new request to get the languages for the repo
              return this.http.get<any>(repo.languages_url).pipe(
                map((language_data) => {
                  return {
                    ...repo,
                    language_data
                  }
                })
              );
            } else {
              return of(repo);
            }
          });

          // Combine all requests into a single observable that resolves when all requests complete
        return forkJoin(requests);  // Wait for all inner observables to finish
        }),
        tap((mergedData) => {
          this.cache = mergedData;
        })
      )
    }
    
    catch {
      // catch error fetching the repositories
      return of(this.cache);
    }
    
  }
}
