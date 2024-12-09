import { Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [
    {path: '', component:TesteComponent},
    {path: '**', redirectTo:''}
];
