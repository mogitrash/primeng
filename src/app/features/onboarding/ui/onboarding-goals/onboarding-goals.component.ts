import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OnboardingGoalsItemComponent } from '../onboarding-goals-item/onboarding-goals-item.component';

export interface OnboardingGoalItem {
  id: number;
  iconUrl: string;
  text: string;
  isActive: boolean;
}

const ONBOARDING_GOALS: OnboardingGoalItem[] = [
  {
    iconUrl: 'assets/icons/chatting-goal.svg',
    id: 1,
    text: 'Just chatting',
    isActive: false,
  },
  {
    iconUrl: 'assets/icons/flirting-goal.svg',
    id: 2,
    text: 'Flirting',
    isActive: false,
  },
  {
    iconUrl: 'assets/icons/relationships-goal.svg',
    id: 3,
    text: 'Relationships',
    isActive: false,
  },
  {
    iconUrl: 'assets/icons/language-goal.svg',
    id: 4,
    text: 'Language exchange',
    isActive: false,
  },
  {
    iconUrl: 'assets/icons/support-goal.svg',
    id: 5,
    text: 'Getting support',
    isActive: false,
  },
];

@Component({
  selector: 'sprk-onboarding-goals',
  imports: [ButtonModule, OnboardingGoalsItemComponent],
  templateUrl: './onboarding-goals.component.html',
  styleUrl: './onboarding-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingGoalsComponent {
  public next = output();

  public goals: OnboardingGoalItem[] = ONBOARDING_GOALS;

  public goToNextStep() {
    this.next.emit();
  }

  public onToggleActive(id: number) {
    this.goals.map((goal) => {
      if (goal.id === id) {
        goal.isActive = !goal.isActive;
      }

      return goal;
    });
  }
}
