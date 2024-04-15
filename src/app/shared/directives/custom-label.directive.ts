import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  ngOnInit(): void {}

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'green';
  private _errors?: ValidationErrors | null;

  @Input() set color(value:string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value
    this.setErrorsMessage()
    console.log(this._errors);
    
  }
  
  constructor(private el: ElementRef) { 
    this.htmlElement = el
  }

  setStyle(): void {
    if(!this.htmlElement) {return;}
    this.htmlElement.nativeElement.style.color = this._color
  }

  setErrorsMessage(): void {
    if(!this.htmlElement) return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerText = ''
      return;
    }
    const errors = Object.keys(this._errors)

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido'
      return;
    }
    if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerText = `
        Este campo debe tener al menos ${this._errors['minlength']['requiredLength']} caracteres,
        faltan ${this._errors['minlength']['requiredLength'] - this._errors['minlength']['actualLength']} caracteres`
      return;
    }
    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = 'El campo debe ser un email'
      return;
    }
  }

}
