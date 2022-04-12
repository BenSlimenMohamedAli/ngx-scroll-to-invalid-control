import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
	selector: '[scrollToInvalidControl]',
})
export class ScrollToInvalidControlDirective {
	constructor(
		private el: ElementRef,
		private formGroupDir: FormGroupDirective
	) {}

	@HostListener('ngSubmit') onSubmit() {
		if (this.formGroupDir.control.invalid) {
			this.scrollToFirstInvalidControl();
		}
	}

	private scrollToFirstInvalidControl() {
		const firstInvalidControl: HTMLElement =
			this.el.nativeElement.querySelector('.ng-invalid');

		firstInvalidControl.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
}
