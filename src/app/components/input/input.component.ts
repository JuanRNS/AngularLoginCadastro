import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
type InputTypes = "text" | "password" | "email" | "date" | "number";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }
],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor{


  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => { }
  onTouched: any = () => { }


 
  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}

