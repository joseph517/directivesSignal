import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  // selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit, OnDestroy {

  public user = signal<User>({
    id: 1,
    email: 'a@a.com',
    first_name: 'John',
    last_name: 'Does',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  })

public counter = signal( 10 );

public fullName = computed(  () =>`${this.user().first_name} ${this.user().last_name} - ${this.counter()}` )

public userChangedEffect = effect( () => {
  console.log( `${ this.user().first_name } - ${ this.counter() } ` );
})

  ngOnInit(): void {
    // setInterval( () => {
    //   console.log(this.counter.update( current => current + 1 ))
    // }, 1000 )
  }
  ngOnDestroy(): void {

    console.log('ngOnDestroy')

    this.userChangedEffect.destroy()
    
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }

  onFieldUpdate( field: keyof User, value: string ){
    this.user.update( current => {
      let updatedUser = {...current};
      switch ( field ) {
        case 'email':
          updatedUser.email = value;
          break;
        case 'avatar':
          updatedUser.avatar = value;
          break;
        case 'first_name':
          updatedUser.first_name = value;
          break;
        case 'last_name':
          updatedUser.last_name = value;
          break;
        case 'id':
          updatedUser.id = Number( value );
          break;
      }
      return updatedUser; 
    })
  }
}
