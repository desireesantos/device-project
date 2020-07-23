import { Component } from '@angular/core';
import { GitHubService } from './http-request.service';

@Component({
  selector: 'app-codeversion',
  templateUrl: './codeversion.component.html',
  styleUrls: ['./codeversion.component.css'],
})
export class CodeversionComponent {
  title = 'Repositories Name';
  userName: string = 'desireesantos';
  repos: any[];

  constructor(private gitHubService: GitHubService) {}

  public getRepositories() {
    this.gitHubService.getRepositories(this.userName).subscribe(
      (response) => {
        console.log('response received');
        this.repos = response;
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
