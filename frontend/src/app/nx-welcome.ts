import {
    Component,
    inject,
    OnInit,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IWelcome } from '@ixcamper-monorepo/shared';
import { environment } from './app.config';

@Component({
    selector: 'app-nx-welcome',
    imports: [CommonModule],
    template: ` <h1>{{ message() }}</h1>`,
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class NxWelcome implements OnInit {
    message = signal('Loading..');
    private http = inject(HttpClient);

    ngOnInit() {
        this.http
            .get<IWelcome>(`${environment.apiUrl}/welcome`)
            .subscribe((response: IWelcome) => {
                this.message.set(response.message);
            });
    }
}
