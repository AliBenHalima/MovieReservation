import { Component, OnInit } from '@angular/core';
import { AuthService } from './sign-up/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'Project';

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.authService.checkAuth();
		this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (document.getElementById('custom_js') !=null) {
                    document.getElementById('custom_js').remove();
                }
                const node = document.createElement('script');
                node.src = 'assets/js/main.js';
                node.type = 'text/javascript';
                node.async = false;
                node.id = 'custom0_js';
                node.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node);

				const node1 = document.createElement('script');
                node1.src = 'assets/js/photoswipe-ui-default.min.js';
                node1.type = 'text/javascript';
                node1.async = false;
                node1.id = 'custom1_js';
                node1.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node1);
				
				const node2 = document.createElement('script');
                node2.src = 'assets/js/photoswipe.min.js';
                node2.type = 'text/javascript';
                node2.async = false;
                node2.id = 'custom2_js';
                node2.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node2);

				
				const node3 = document.createElement('script');
                node3.src = 'assets/js/jquery.morelines.min.js';
                node3.type = 'text/javascript';
                node3.async = false;
                node3.id = 'custom3_js';
                node3.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node3);

				
				const node4 = document.createElement('script');
                node4.src = 'assets/js/plyr.min.js';
                node4.type = 'text/javascript';
                node4.async = false;
                node4.id = 'custom4_js';
                node4.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node4);

				
				const node5 = document.createElement('script');
                node5.src = 'assets/js/nouislider.min.js';
                node5.type = 'text/javascript';
                node5.async = false;
                node5.id = 'custom5_js';
                node5.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node5);

				
				const node6 = document.createElement('script');
                node6.src = 'assets/js/wNumb.js';
                node6.type = 'text/javascript';
                node6.async = false;
                node6.id = 'custom6_js';
                node6.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node6);

				
				const node7 = document.createElement('script');
                node7.src = 'assets/js/jquery.mCustomScrollbar.min.js';
                node7.type = 'text/javascript';
                node7.async = false;
                node7.id = 'custom7_js';
                node7.charset = 'utf-8';
				document.getElementsByTagName('head')[0].appendChild(node7);

				// const node8 = document.createElement('script');
                // node8.src = 'assets/js/jquery.mousewheel.min.js';
                // node8.type = 'text/javascript';
                // node8.async = false;
                // node8.id = 'custom8_js';
                // node8.charset = 'utf-8';
				// document.getElementsByTagName('head')[0].appendChild(node8);

				// const node9 = document.createElement('script');
                // node9.src = 'assets/js/owl.carousel.min.js';
                // node9.type = 'text/javascript';
                // node9.async = false;
                // node9.id = 'custom9_js';
                // node9.charset = 'utf-8';
				// document.getElementsByTagName('head')[0].appendChild(node9);

				// const node10 = document.createElement('script');
                // node10.src = 'assets/js/bootstrap.bundle.min.js';
                // node10.type = 'text/javascript';
                // node10.async = false;
                // node10.id = 'custom10_js';
                // node10.charset = 'utf-8';
				// document.getElementsByTagName('head')[0].appendChild(node10);

				// const node11 = document.createElement('script');
                // node11.src = 'assets/js/jquery-3.3.1.min.js';
                // node11.type = 'text/javascript';
                // node11.async = false;
                // node11.id = 'custom11_js';
                // node11.charset = 'utf-8';
				// document.getElementsByTagName('head')[0].appendChild(node11);
				
				
				
            }
        });
    }
	}

