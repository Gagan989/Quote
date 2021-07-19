export class Quote {
    public upvotes:number
    public downvotes:number

    constructor(
        public id:number,
        public quote:string, 
        public author:string,
        public publisher:string,
        public completeDate:Date
    ){
        this.upvotes = 0
        this.downvotes = 0
    }
}