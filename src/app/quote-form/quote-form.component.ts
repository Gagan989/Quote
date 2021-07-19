import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote=new Quote(0,"","","",new Date());
  
  @Output() addQuote=new EventEmitter<Quote>();
  quotes: any;
    
  submitQuote(){
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote(0,"","","",new Date());
  }

  toogleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showSubmit= !this.quotes[index].showSubmit;
  }

  constructor() { }

  ngOnInit() {
  }
}
