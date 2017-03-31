import {Component, Inject} from '@angular/core';
import {AuthService, NavigatorServiceProvider, NavigatorService} from '../../../shared/services';

@Component({
    selector: 'signout',
    template: '',
})
export class SignOutComponent {
    private navigator:NavigatorService;

    constructor(@Inject(AuthService) private auth:AuthService,
                @Inject(NavigatorServiceProvider) navigatorProvider:NavigatorServiceProvider) {
        this.navigator = navigatorProvider.getInstance();
    }

    ngOnInit() {
        this.auth
            .signOut()
            .then((user:any) => {
                this.navigator.navigate(['/signin']);
            })
            .catch((error:any) => {
                this.navigator.navigate(['/signin']);
            });
    }
}
