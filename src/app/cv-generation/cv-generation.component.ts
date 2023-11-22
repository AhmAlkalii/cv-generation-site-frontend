import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cv-generation',
  templateUrl: './cv-generation.component.html',
  styleUrls: ['./cv-generation.component.css'],
})
export class CvGenerationComponent {
  jobDescription: string = '';
  generatedCV: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  generateCV() {
    // Check if jobDescription is not empty
    if (!this.jobDescription.trim()) {
      console.error('Job description cannot be empty');
      return;
    }

    // Use the AuthService to call the backend API
    this.authService.generateCV({ jobDescription: this.jobDescription }).subscribe(
     // Inside the success callback of the subscribe method in generateCV() method
      (res: any) => {
        if (res && res.choices && res.choices.length > 0) {
          const firstChoice = res.choices[0];
          if (firstChoice && firstChoice.message && firstChoice.message.content) {
            // Extract and set the generated CV content
            this.generatedCV = firstChoice.message.content.trim();
            this.error = ''; // Clear any previous error
          } else {
            this.error = 'Unexpected response structure';
            this.generatedCV = ''; // Clear the generated CV
          }
        } else {
          this.error = 'Unexpected response structure';
          this.generatedCV = ''; // Clear the generated CV
        }
      },
      (err) => {
        console.error(err);
        this.error = 'CV generation failed';
      }
    );
  }
}



