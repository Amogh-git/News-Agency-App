import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { NewsModel } from '../shared/news.model';
import { Form } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: any;
  articles : any;
  temp : NewsModel = new NewsModel;
  constructor(public newsService : NewsService) { }

  ngOnInit(): void {
    this.FetchHeadlines();
  }
  FetchHeadlines()
  {
     this.newsService.GetAllGaurdian()
        .subscribe((result) =>
        {
          this.articles = result;
                  this.articles.response.results.forEach((element: any) => {
                       this.newsService.newsArticles.push(this.newsService.CusotomMapper(element));
          });
        }) 
  }

}
