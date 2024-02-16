import { Injectable } from '@angular/core';
import { Action } from '../models/state-actions.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentState: State = {
    fileItems: [],
  };

  async submit(action: Action) {
    await action.submit(this.currentState);
  }

}
