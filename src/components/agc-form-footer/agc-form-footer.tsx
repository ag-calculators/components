import { Component, Prop } from '@stencil/core';
import Trigger from '../../common/trigger';

@Component({
    tag: 'agc-form-footer',
    styleUrl: 'agc-form-footer.css'
})
export class AgcFormFooter {
    @Prop() renderFeedbackFunc: () => void;
    @Prop() actions: any = {};

    render() {
        let feedbackTrigger = new Trigger(this, this.renderFeedbackFunc, (e) => console.error(e));

        return (
            <div class="formFooter">
                <div class="formFooter__section">
                    <div class="formFooter__item formFooterFeedback">
                        {  feedbackTrigger.trigger([]) }
                    </div>
                </div>
                <div class="formFooter__section">
                    { this.actions.previous && <div onClick={this.actions.previous.action} class="formFooter__item button button--clear">{this.actions.previous.text}</div>}
                    { this.actions.next && <div onClick={this.actions.next.action} class="formFooter__item button">{this.actions.next.text}</div> }
                </div>
            </div>
        );
    }
}
