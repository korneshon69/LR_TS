import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsResponse, ISourcesResponse } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer = document.querySelector('.sources') as HTMLElement;

        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: Event) => 
                this.controller.getNews(e, (data: INewsResponse) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data: ISourcesResponse) => this.view.drawSources(data));
    }
}

export default App;