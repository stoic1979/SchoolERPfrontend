import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {

  constructor() { }

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    display(value: boolean) {
        this.status.next(value);
    }

}
