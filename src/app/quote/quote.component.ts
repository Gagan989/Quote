import {  Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
// import { TimeAgoPipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  quote!: Quote;

  @Output() isComplete= new EventEmitter<boolean>();
 

  quotes = [
      // new Quote(0,'','','',new Date()),
      new Quote(1, 'Tell me and I forget. Teach me and I remember. Involve me and I learn.','Benjamin Franklin','Gagan Chhabra',new Date(2021,5,7)),
      new Quote(2, 'Whoever is happy will make others happy too.', 'Anne Frank','Gagan Chhabra',new Date(2021,5,7)),
      new Quote(3, 'Love the life you live. Live the life you love.', 'Bob Marley','Gagan Chhabra',new Date(2021,5,7)),
      new Quote (4, 'The way to get started is to quit talking and begin doing.', 'Walt Disney','Gagan Chhabra',new Date(2021,5,7)),
      new Quote (5, 'If you really look closely, most overnight successes took a long time.', 'Steve Jobs','Gagan Chhabra', new Date(2021,5,7)),
]

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

deleteQuote(isComplete:any,index:any){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote} ?`)
    if(toDelete) {
      this.quotes.splice(index,1);
    }  
  }
}

addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

upvotes = 0;
downvotes = 0;
timePass = 0;

tPassed(){
  this.timePass = 0;

}

upVote(i: number){
  this.quotes[i].upvotes +=1;
}

downVote(i: number){
  this.quotes[i].downvotes +=1;
}

  startNum!: number;
  lastNum!: number;
  ctr!: number;

hUpvote(){

  this.startNum = 0
  this.lastNum = 0

   for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
    this.lastNum = this.quotes[this.ctr].upvotes;
    if(this.lastNum > this.startNum){
      this.startNum = this.lastNum
    }
  }
      
  return  this.startNum
}

  constructor() { }

  ngOnInit() {
  }

}