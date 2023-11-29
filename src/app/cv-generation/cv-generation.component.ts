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
  isCVGenerated: boolean = false; // track CV generation status

  constructor(private authService: AuthService) {}

  generateCV() {
    // Check if jobDescription is not empty
    if (!this.jobDescription.trim()) {
      this.error = 'Job description cannot be empty';
      return;
    }

    // Call the OpenAI API for CV generation on the frontend
    this.authService.generateCVWithFetchAPI({ jobDescription: this.jobDescription }).subscribe(
      (content: string) => {
        // Update the UI with the new content
        this.generatedCV += content;
        this.isCVGenerated = true; // Set the flag to true after successful generation
      },
      (error) => {
        console.error('Error:', error);
        this.error = 'CV generation failed';
        this.isCVGenerated = false; // Set the flag to false on error
      }
    );
  }

  resetCVGeneration() {
    this.generatedCV = '';
    this.isCVGenerated = false; // Reset the flag when resetting CV generation
  }
}
