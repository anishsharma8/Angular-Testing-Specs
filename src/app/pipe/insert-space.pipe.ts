import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'insertSpace' })
export class InsertSpacePipe implements PipeTransform {
    transform(value: any): any {
        return value.replace(/([A-Z])/g, ' $1', " ");
    }
}