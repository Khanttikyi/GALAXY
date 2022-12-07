import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  activate: () => void;
  deactivate: () => void;
}
