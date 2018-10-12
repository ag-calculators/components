import { Component, State, Prop, Element } from '@stencil/core';


@Component({
    tag: 'agc-multistep',
    styleUrl: 'agc-multistep.css'
})
export class AgcMultistep {
    @Element() formEl: HTMLElement;
    @State() values: any = { errors: {} };
    @State() currentStep: number = 1;
    @State() activeStep: any;
    @Prop() steps: number = 1;
    @Prop() name: string;
    @Prop() contentHeight: string = 'auto';
    @Prop() enterTransition: string
    @Prop() leaveTransition: string
    @Prop() errorTransition: string

    @Prop() stepsFunc: (currentStep, values) => any;
    @Prop() renderFunc: (values) => void;

    transition: HTMLAgcStepTransitionElement;

    componentWillLoad() {
        this.activeStep = this.stepsFunc && this.stepsFunc(1, this.values);
    }
    componentDidLoad() {
        this.transition = this.formEl.querySelector('agc-step-transition');
    }

    hasPrevious () {
        return this.currentStep > 1;
    }
    hasNext () {
        return this.currentStep > 0 &&  this.currentStep < this.steps;
    }
    isFirst () {
        return this.currentStep == 1;
    }
    isLast () {
        return this.currentStep == this.steps;
    }
    move (event, stepIndex) {
        event && event.preventDefault();

        if (!this.stepsFunc) {
            return;
        }

        if (stepIndex === 1) {
            // moving forward
            let step = this.stepsFunc(this.currentStep, this.values);
            if (step) {

                var valid = true;

                var form = this.formEl.querySelector('form');

                var newValues = step && step.onStepComplete && step.onStepComplete(this.values, form);

                if (newValues) {
                    this.values = {...newValues};
                }
                if (step.validate) {
                    valid = step.validate(this.values, (name, msg) => {
                        if (!this.values.hasOwnProperty('errors')) {
                            this.values['errors'] = {};
                        }
                       this.values['errors'][name] = msg;
                    });    
                }

                if (!valid) {
                    this.values = {...this.values}
                    this.errorTransition && this.transition.run(this.errorTransition);
                    return;
                }

                
            }
            
        }

        if (this.currentStep + stepIndex > this.steps) { this.finish(event); return; }
        if (this.currentStep + stepIndex < 0 ) { return; }
        this.currentStep = this.currentStep + stepIndex;
        this.activeStep = this.stepsFunc(this.currentStep, this.values);
        this.enterTransition && this.transition.run(stepIndex === 1 ? this.enterTransition : this.leaveTransition);
        

    }
    finish (event) {
        event.preventDefault();
        this.currentStep = 0;
        this.activeStep = this.stepsFunc(0, this.values);
        this.enterTransition && this.transition.run(this.enterTransition);
    }
    render() {
        let step = this.activeStep;
        let actions = {};

        if (this.isFirst()) {
            actions['next'] = { text: step.nextText || 'Continue', action: (e) => this.move(e, 1) };
        } else if (this.isLast()) {
            actions['previous'] = { text: step.prevText || 'Back', action: (e) => this.move(e, -1) };
            actions['next'] = { text: step.nextText || 'Finish', action: (e) => this.finish(e) };
        } else {
            actions['next'] = { text: step.nextText || 'Continue', action: (e) => this.move(e, 1) };
            actions['previous'] = { text: step.prevText || 'Back', action: (e) => this.move(e, -1) };
        }

        return (
            <agc-step-transition transition={this.enterTransition}>
                <form onSubmit={ e => e.preventDefault() } class={`multistep-form${this.currentStep == 0 ? ' clear': ''}`} name={this.name || 'multiStepForm'}>
                    {step.title && <div class="multistep-form__title">{ step.title }</div>}
                    {this.currentStep > 0 && (<div>                
                    <div style={{minHeight: this.contentHeight}} class="multistep-form__content">
                    { step.render && step.render(this.values)}
                    </div>
                        <agc-form-footer actions={actions} renderFeedbackFunc={() => `Step ${this.currentStep} of ${this.steps}`}></agc-form-footer>
                    </div>)}                          
                    {this.currentStep == 0 && step.render && <div>{step.render(this.values, (event) => this.move(event, 1) )}</div>}
                </form>
            </agc-step-transition>
        );
    }
}
