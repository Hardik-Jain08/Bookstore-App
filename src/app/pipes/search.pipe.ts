import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cards: any[], searchTerm: string): any[] {
    return cards.filter(card => 
      (card.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

}
