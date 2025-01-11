import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OnboardingGenderItemComponent } from '../onboarding-gender-item/onboarding-gender-item.component';

export interface OnboardingGenderItem {
  isActive: boolean;
  text: string;
  iconUrl: string;
  id: number;
}

const ONBOARDING_GENDER: OnboardingGenderItem[] = [
  {
    id: 1,
    text: 'I’m female',
    iconUrl: 'assets/icons/female.svg',
    isActive: false,
  },
  {
    id: 2,
    text: 'I’m male',
    iconUrl: 'assets/icons/male.svg',
    isActive: false,
  },
  {
    id: 3,
    text: 'I’m non-binary',
    iconUrl: 'assets/icons/non-binary.svg',
    isActive: false,
  },
];

@Component({
  selector: 'sprk-onboarding-gender',
  imports: [ButtonModule, OnboardingGenderItemComponent],
  templateUrl: './onboarding-gender.component.html',
  styleUrl: './onboarding-gender.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingGenderComponent {
  public next = output();

  public genders: OnboardingGenderItem[] = ONBOARDING_GENDER;

  public goToNextStep() {
    this.next.emit();
  }

  public onSetActive(id: number) {
    this.genders.map((gender) => {
      if (gender.id === id) {
        gender.isActive = true;
      } else {
        gender.isActive = false;
      }

      return gender;
    });
  }
}
