import { Component, Prop } from '@stencil/core';
import Trigger from '../../common/trigger';

@Component({
    tag: 'agc-centered',
    styleUrl: 'agc-centered.css'
})
export class AgcCentered {
    @Prop() renderItemsFunc: () => void;
    @Prop() width: string = '100%'
    

    render() {
        let renderItemsTrigger = new Trigger(this, this.renderItemsFunc, (e) => console.error(e));

        return (
            <div class="agc-centered">
                {renderItemsTrigger.trigger([]).map(c => <div class="agc-centered__item">{c}</div>)}
            </div>
        );
    }
}
