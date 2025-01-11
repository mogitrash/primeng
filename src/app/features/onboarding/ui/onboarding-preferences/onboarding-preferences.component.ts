import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { OnboardingPreferencesItemComponent } from '../onboarding-preferences-item/onboarding-preferences-item.component';
import { ButtonModule } from 'primeng/button';

export interface OnboardingPreferencesItem {
  isActive: boolean;
  text: string;
  iconUrl: string;
  id: number;
}

const ONBOARDING_PREFERENCES: OnboardingPreferencesItem[] = [
  {
    id: 1,
    text: 'Female',
    iconUrl: 'assets/icons/female.svg',
    isActive: false,
  },
  {
    id: 2,
    text: 'Male',
    iconUrl: 'assets/icons/male.svg',
    isActive: false,
  },
  {
    id: 3,
    text: 'Non-binary',
    iconUrl: 'assets/icons/non-binary.svg',
    isActive: false,
  },
];

@Component({
  selector: 'sprk-onboarding-preferences',
  imports: [OnboardingPreferencesItemComponent, ButtonModule],
  templateUrl: './onboarding-preferences.component.html',
  styleUrl: './onboarding-preferences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPreferencesComponent {
  public next = output();

  public genders: OnboardingPreferencesItem[] = ONBOARDING_PREFERENCES;

  public goToNextStep() {
    this.next.emit();
  }

  public onToggleActive(id: number) {
    this.genders.map((gender) => {
      if (gender.id === id) {
        gender.isActive = !gender.isActive;
      }

      return gender;
    });
  }
}
