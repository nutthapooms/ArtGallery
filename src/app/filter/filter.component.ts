import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  MinLengthValidator,
} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() artworks: any = [];
  @Output() filter = new EventEmitter<any>();

  artworksStyle = this.artworks;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  selectedItemsList = [];
  checkedIDs = [];
  currentFilter = [];

  getAllArtStyles(artworks: any) {
    //retrieve all style from all artworks on current page

    this.artworksStyle = [''];
    //use for of because foreach doesn't wait for promise
    for (const artwork of artworks) {
      let temp_artworks: [] = [];
      artwork.style_titles[0] != null
        ? (temp_artworks = artwork.style_titles)
        : (temp_artworks = []);
      this.artworksStyle = this.artworksStyle.concat(temp_artworks);
    }
    let finalresult: any = [];
    let unitArr: any = [];
    let existingArr: string[] = [];
    let index = 0;

    //reduce artworks's style to count number of duplicate styles
    this.artworksStyle.reduce((result: any, currentValue: any) => {
      if (
        existingArr.find((element) => element == currentValue) == currentValue
      ) {
        result = currentValue;
        finalresult[
          finalresult.findIndex((item: any) => item.style === currentValue)
        ].Unit += 1;
      } else {
        unitArr[index] = 1;
        result = currentValue;
        finalresult.push({ style: currentValue, Unit: 1 });
        existingArr.push(currentValue);
        index += 1;
      }
      return result;
    });

    this.artworksStyle = finalresult;
    return this.artworksStyle;
  }

  ngOnInit() {
    this.getAllArtStyles(this.artworks);
    this.myForm = this.fb.group({
      style_titles: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artworks'] != undefined) {
      this.myForm = this.fb.group({
        style_titles: this.fb.array([]),
      });
    }
    this.getAllArtStyles(this.artworks);
  }
  onChange(styles: string, event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    const filterFormArray = <FormArray>this.myForm.controls['style_titles'];
    if (isChecked) {
      filterFormArray.push(new FormControl(styles));
      //add filter critria to parent component
      this.filter.emit(this.myForm.value.style_titles);
    } else {
      let index = filterFormArray.controls.findIndex(
        (x) => x.value == styles
      );
      filterFormArray.removeAt(index);

      //delete filter critria to parent component
      this.filter.emit(this.myForm.value.style_titles);
    }
  }
}
