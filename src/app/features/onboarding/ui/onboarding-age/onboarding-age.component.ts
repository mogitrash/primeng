import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'sprk-onboarding-age',
  imports: [ButtonModule, InputNumberModule],
  templateUrl: './onboarding-age.component.html',
  styleUrl: './onboarding-age.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingAgeComponent {
  public next = output();

  public goToNextStep() {
    this.next.emit();
  }
}
