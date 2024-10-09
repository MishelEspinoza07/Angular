import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { PersonComponent } from './person/person.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

interface IPerson{
  name: string, 
  lastName: string, 
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryComponent, CommonModule, PersonComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  users = [{name: 'abc', email: 'abs@gmail.com' }, {name: 'dfg', email: 'dfg@gmail.com' }]
  selectedUser: any = this.users[0];

  userCardCreated: boolean = true 
  
  result: number = 0;
  title:number = 10;
  animals: string[] = ['a','b','c','d','e','f','g'];

  person: IPerson = {
    name: 'Mishel',
    lastName: 'Espinoza',
    age: 20
  }

  females:number=0
  males:number=0
  discounts:number=0
  persons:any[]=[{gender:0,name:"Marcela Valencia",age:23},{gender:1,name:"Aniceto Arce",age:12},{gender:0,name:"Luisa Armentia",age:43}]

  students:number[]=[1,2,3,4,5,6]
  parents:number[]=[7,8,9,10]

  var1 = 0
  var2= null
  var3 = 'hola'


  constructor(){
    const {name, age} = this.person
    console.log('desestructuracion:', name, age)
    let both = [...this.students, ...this.parents]
    console.log('spreed operator:', both)
    console.log('REST operator:', this.sum(2,4,6))

    console.log('Nullish Coaleshing:', this.var2 ?? this.var3)
    console.log('OR:', this.var2 || this.var1)


    // console.log('substract', this.substrack(8,4))
    // console.log('MAP:', this.animals.map((animal)=> (animal + ' new')))
    // console.log('FOREACH:', this.animals.forEach((animal)=> (animal + ' new')))
    // console.log('FIND:', this.animals.find((animal)=> animal==='z'))
    // console.log('FILTER:', this.animals.filter((animal)=> animal==='y'))
    // console.log('INDEXOF:', this.animals.indexOf('c'))
    this.calculateTotals()
  }
  public calculateTotals() {

    this.females = this.persons.filter(p => p.gender === 0).length;
    this.males = this.persons.filter(p => p.gender === 1).length;
    this.discounts = this.persons.filter(p => p.age > 18).length;
  }

  public deleteDiscounts() {

    this.persons = this.persons.filter(p => p.age <= 18);
    this.calculateTotals();
  }


  public sum (...persons:number[]){
    // return persons[0] + persons[1]
    return persons.reduce(
      (acumulador, valorActual)=> (acumulador + valorActual), 10)
  }
  

  public sum2(num1: number, num2: number): number{
    return num1 + num2;
  }

  private substrack(num1: number, num2: number): number{
      return num1 - num2;
  }

  public getArray(){
    const people: number[] = [1,2,3,4,5,6,7,8];
    for(let i = 0; i < people.length; i++){
      if(people[i] % 2 == 0){
        // console.log('person =', people[i]);
      }
    }
  }
  
  // function sumar() {
  //   return 1 + 2; 
  // }

  // const sumna = () =>{
  //   return 1 + 2;
  // }

  // function resta(a){
  //   return 'hola' + a;
  // }
  // const resta = () => (20 - a);

  public receiveData(data:any){
    console.log('Print in father component:', data)
  }

  public onResult(event:any){
    this.result = event ?? 0
  }

}