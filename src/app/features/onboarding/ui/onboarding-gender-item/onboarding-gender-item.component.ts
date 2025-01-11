import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sprk-onboarding-gender-item',
  imports: [],
  templateUrl: './onboarding-gender-item.component.html',
  styleUrl: './onboarding-gender-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingGenderItemComponent {
  public text = input.required<string>();
  public iconUrl = input.required<string>();
  public isActive = input.required<boolean>();
}
