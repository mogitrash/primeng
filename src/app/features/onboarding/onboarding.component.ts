import { Component, effect, signal } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { OnboardingGoalsComponent } from './ui/onboarding-goals/onboarding-goals.component';
import { OnboardingGenderComponent } from './ui/onboarding-gender/onboarding-gender.component';
import { OnboardingPreferencesComponent } from './ui/onboarding-preferences/onboarding-preferences.component';
import { OnboardingAgeComponent } from './ui/onboarding-age/onboarding-age.component';

@Component({
  selector: 'sprk-onboarding',
  imports: [
    StepperModule,
    ButtonModule,
    OnboardingGoalsComponent,
    OnboardingGenderComponent,
    OnboardingPreferencesComponent,
    OnboardingAgeComponent,
    ProgressBarModule,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  public progress = signal<number>(0);
  public activeStep = signal<number>(0);

  private stepsAmount = 4;

  constructor() {
    effect(() => {
      const activeStep = this.activeStep();

      this.progress.set((activeStep * 100) / this.stepsAmount);
    });
  }

  public nextStep() {
    if (this.activeStep() + 1 < this.stepsAmount) {
      this.activeStep.set(this.activeStep() + 1);
    }
  }

  public prevStep() {
    console.log(this.activeStep() - 1);

    if (this.activeStep() - 1 >= 0) {
      this.activeStep.set(this.activeStep() - 1);
    }
  }
}
