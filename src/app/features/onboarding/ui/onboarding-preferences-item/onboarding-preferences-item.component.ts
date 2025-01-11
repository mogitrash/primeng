import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sprk-onboarding-preferences-item',
  imports: [],
  templateUrl: './onboarding-preferences-item.component.html',
  styleUrl: './onboarding-preferences-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPreferencesItemComponent {
  public text = input.required<string>();
  public iconUrl = input.required<string>();
  public isActive = input.required<boolean>();
}
