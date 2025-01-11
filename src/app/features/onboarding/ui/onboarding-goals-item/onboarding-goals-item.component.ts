import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'sprk-onboarding-goals-item',
  imports: [],
  templateUrl: './onboarding-goals-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingGoalsItemComponent {
  public text = input.required<string>();
  public iconUrl = input.required<string>();
  public isActive = input.required<boolean>();
}
