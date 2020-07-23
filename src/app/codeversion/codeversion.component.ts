import { Component } from '@angular/core';
import { Repository } from '../model/repos';
import { GitHubService } from './http-request.service';

@Component({
  selector: 'app-codeversion',
  templateUrl: './codeversion.component.html',
  styleUrls: ['./codeversion.component.css'],
})
export class CodeversionComponent {
  title = 'Project';
  userName: string = 'tektutorialshub';
  repo: Repository[];

  constructor(private gitHubService: GitHubService) {}

  public getRepositories() {
    this.gitHubService.getRepositories(this.userName).subscribe(
      (response) => {
        console.log('response received');
        this.repo = response;
        console.log('---', response);
      },
      (error) => {
        console.log('Error', error);
      },
      () => {
        console.error('Request Completed');
      }
    );
  }
}
