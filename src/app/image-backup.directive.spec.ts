import { ImageBackupDirective } from './image-backup.directive';
import {ElementRef} from "@angular/core";

describe('ImageBackupDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef('../assets/images/Art_Institute_of_Chicago_logo.svg')

    const directive = new ImageBackupDirective(el);
    expect(directive).toBeTruthy();
  });
});
