import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { BoardPage } from '../board/board';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = BoardPage;

    constructor() {

    }
}
