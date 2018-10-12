import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'agc-card',
    styleUrl: 'agc-card.css'
})
export class AgcCard {
    @Prop() block: boolean
    @Prop() noBorder: string

    render() {
        return (
            <div class={`agc-card${this.block && " agc-card-block" || ""}${this.noBorder && " agc-card-no-border" || ""} agc-p-30`}>
                <slot></slot>
            </div>
        );
    }
}
