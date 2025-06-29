import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: any[] = [];
  repo_language_data: any[] = [];
  lang_mappings: Record<string, string> = {
    "html": "html5",
    "scss": "css",
  };

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data) => {
      this.repos = data;
    });
  }

  percentageKeys(record: Record<string, number>): string[] {
    return Object.keys(record);
  }

  getLangMapping(lang: string): string {
    // because we are using a service to get images from
    // language names, we'll add mappings for some that don't appear
    // by default
    lang = lang.toLowerCase();
    if (this.lang_mappings.hasOwnProperty(lang)) {
      return this.lang_mappings[lang];
    }
    return lang;
  }
}