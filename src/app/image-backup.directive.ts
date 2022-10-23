
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[appHideMissing]",
})
export class ImageBackupDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    
    //use on server images to handle lost connectivity
    this.el.nativeElement.src = '../assets/images/Art_Institute_of_Chicago_logo.svg';


    // this.el.nativeElement.src = "https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg";
  }
}