import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cv-generation',
  templateUrl: './cv-generation.component.html',
  styleUrls: ['./cv-generation.component.css'],
})
export class CvGenerationComponent {
  jobDescription: string = '';
  generatedCV: any;

  constructor(private authService: AuthService) {}

  generateCV() {
    // Check if jobDescription is not empty
    if (!this.jobDescription.trim()) {
      console.error('Job description cannot be empty');
      return;
    }

    // Use the AuthService to call the backend API
    this.authService.generateCV({ jobDescription: this.jobDescription }).subscribe(
      (res) => {
        this.generatedCV = res.generatedCV;
      },
      (err) => {
        console.error(err);
        // Handle CV generation error
      }
    );
  }
}
