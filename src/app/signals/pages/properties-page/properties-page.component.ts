import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  // selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'a@a.com',
    first_name: 'John',
    last_name: 'Does',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  })

public fullName = computed(  () =>`${this.user().first_name} ${this.user().last_name}` )

  onFieldUpdate( field: keyof User, value: string ){

    this.user.set( {
      ...this.user(),
      [field]: value
    })

  }
}
