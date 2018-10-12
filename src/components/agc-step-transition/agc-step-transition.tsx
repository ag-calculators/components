import { Component, Prop, Method, Element } from '@stencil/core';

//const ucase = str => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`

@Component({
    tag: 'agc-step-transition',
    styleUrl: 'agc-step-transition.css'
})
export class AgcStepTransition {
    @Prop() name: string
    @Prop() transition: string = "slideLeft"
    @Element() rootElement: HTMLElement

    componentDidLoad() {
        this.rootElement.dataset['name'] = this.name;
    }

    @Method()
    run(transition) {        
        let div = this.rootElement.children[0];
        div.className = '';
        setTimeout(() => {
            div.className = transition;     
        }, 0)       
    }

    render() {
        return (
            <div class={this.transition}>
                <slot></slot>
            </div> 
        );
    }
}
