import { Injectable } from '@angular/core';

import { blogData } from  './blog-data-class';
import { BLOGDATA } from './blog-data';

@Injectable()
export class BlogDataService {
  getData() : Promise<blogData[]> {
    return Promise.resolve(BLOGDATA);
  }
}
