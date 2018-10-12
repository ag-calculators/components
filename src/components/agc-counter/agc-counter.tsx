import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'agc-counter',
    styleUrl: 'agc-counter.css'
})
export class AgcCounter {
    @Prop() size: string = "md"
    @Prop() label: string = ""
    @Prop() counter: string = ""
    @Prop() sign: string = ""
    @Prop() icon: string = ""
    @Prop() renderFunc: () => void;

    render() {
        return (
            <div class={`counter counter-${this.size}`}>
              <div class="counter-label text-uppercase">{this.label}</div>
              <div class="counter-number-group">
                {this.icon && (<span class="counter-icon mr-10">
                  <i class={this.icon}></i>
                </span>)}
                <span class="counter-number">{this.counter}</span>
                {this.sign && (<span class="counter-number-related">{this.sign}</span>)}
              </div>
              { this.renderFunc && (<div class="counter-label">{this.renderFunc()}</div>)}
            </div>
        );
    }
}

