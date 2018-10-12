import { Component } from '@stencil/core';


@Component({
    tag: 'agc-counter-row',
    styleUrl: 'agc-counter-row.css'
})
export class AgcCounterRow {
    render() {
        return (
            <div class="agc-counter-row">
                <slot></slot>
            </div>
        );
    }
}
