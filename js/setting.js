import {Quiz} from "./quiz.js"
export class Setting{
    constructor(){
     this.category = document.getElementById('category');
     this.difficulty = document.getElementsByName('difficulty');
     this.amount = document.getElementById('Number');
     this.startBtn = document.getElementById('startBtn')
     this.startBtn.addEventListener("click",()=>
     {
         this.startQuizz()
        })
    }
   async startQuizz(){
        let cat = this.category.value;
        let difficulty = [...this.difficulty].filter(element => element.checked);
        let amount = this.amount.value;
        let url = `https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=${difficulty[0].value}`;
        let result = await this.fetchUrl(url);
        if(result.length > 0)
        {
            $("#setting").fadeOut(500 , ()=>
            {
                $("#quiz").fadeIn(500)
            })
          new Quiz(result,amount)
        }
    }
    async fetchUrl(url){
        let response = await fetch(url)
        let data = await response.json();
        return data.results;
        
    }
}