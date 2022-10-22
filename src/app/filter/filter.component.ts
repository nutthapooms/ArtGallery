import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() artworks: any = [];
  @Output() filter = new EventEmitter<any>();

  emails = this.artworks;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  selectedItemsList = [];
  checkedIDs = [];
  currentFilter = [];

  getAllArtStyles(artworks: any) {
    this.emails = [];
    artworks.forEach((artwork: { title: string; style_titles: any }) => {
      let temp_artworks: [] = [];
      artwork.style_titles[0] != null
        ? (temp_artworks = artwork.style_titles)
        : (temp_artworks = []);
      this.emails = this.emails.concat(temp_artworks);
    });
    this.emails = [...new Set(this.emails)];
  }

  ngOnInit() {
    this.getAllArtStyles(this.artworks);
    this.myForm = this.fb.group({
      style_titles: this.fb.array([]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllArtStyles(this.artworks);
  }

  onChange(email: string, event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    const emailFormArray = <FormArray>this.myForm.controls['style_titles'];

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
      // console.log(this.myForm)
      this.filter.emit(this.myForm.value.style_titles)
    } else {
      let index = emailFormArray.controls.findIndex((x) => x.value == email);
      emailFormArray.removeAt(index);
      this.filter.emit(this.myForm.value.style_titles)

    }
  }
}
