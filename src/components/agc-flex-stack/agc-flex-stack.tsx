import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'agc-flex-stack',
    styleUrl: 'agc-flex-stack.css'
})
export class AgcFlexStack {
    @Prop() height: string = '10vh';
    

    render() {
        return (
            <div class="flex-stack" style={{minHeight: this.height}}>
                <div><slot name="header"></slot></div>
                <div class="flex-stack__content"><slot name="content"></slot></div>
                <div><slot name="afterContent"></slot></div>
                <div><slot name="footer"></slot></div>
            </div>
        );
    }
}
