import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlePagePageRoutingModule } from './article-page-routing.module';

import { ArticlePagePage } from './article-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlePagePageRoutingModule
  ],
  declarations: [ArticlePagePage]
})
export class ArticlePagePageModule {}
