import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.css']
})
export class RecipeCreationComponent implements OnInit {
  form!: FormGroup;
  showTagHelperMessage = false;
  readonly separatorKeys: number[] = [ENTER, COMMA];
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, 
    private cd: ChangeDetectorRef, 
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(60)]],
      description: ['', [Validators.required, this.wordCountValidator(25)]],
      image: [null, Validators.required],
      difficulty: [null, Validators.required],
      tags: this.formBuilder.array([], [Validators.required, this.minLengthArray(1)])
    });
  }
  

  get tagsArray() {
    return this.form.get('tags') as FormArray;
  }

  addTagToForm(tag: string) {
    if (tag) {
      this.tagsArray.push(this.formBuilder.control(tag, Validators.required));
      this.cd.detectChanges();
      this.showTagHelperMessage = false;
    }
  }

  addTagFromInput(event: MatChipInputEvent): void {
    const input = event.chipInput.inputElement;
    const value = event.value;
    if ((value || '').trim()) {
      this.addTagToForm(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  deleteTag(index: number) {
    this.tagsArray.removeAt(index);
    this.cd.detectChanges();
  }

  clearImage() {
    this.form.patchValue({ image: null });
    this.form.get('image')?.updateValueAndValidity();
  }

  onAttachClick(event: Event, fileInput: HTMLInputElement) {
    event.preventDefault();
    fileInput.click();
  }

  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.snackBar.open('Recipe created successfully!', '', {
        duration: 3000,
      });
      setTimeout(() => {
        this.form.reset();
        this.router.navigate(['/']);
      }, 3000);
    }
  }

  toggleTagHelperMessage() {
    this.showTagHelperMessage = this.tagInput.nativeElement.value.length > 0;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.form.patchValue({
        image: file.name
      });
      this.form.get('image')?.updateValueAndValidity();
    }
  }

  wordCountValidator(maxWords: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const words = control.value ? control.value.split(/\s+/) : [];
      return words.length > maxWords ? { maxWords: { actualWords: words.length, maxWords } } : null;
    };
  }

  minLengthArray(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if ((control as FormArray).length >= min) return null;
      return { minLengthArray: { valid: false } };
    };
  }
}
