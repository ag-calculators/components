import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'agc-step',
    styleUrl: 'agc-step.css'
})
export class AgcStep {
    @Prop() number: string = "1"
    @Prop() heading: string
    @Prop() description: string
    @Prop() isCurrent: boolean

    render() {
        return (
            <div class={`step${this.isCurrent ? " current" : ""}`}>
                <span class="step-number">{this.number}</span>
                <div class="step-desc">
                    <span class="step-title">{this.heading}</span>
                    <p>{this.description}</p>
                </div>
            </div>
        );
    }
}
