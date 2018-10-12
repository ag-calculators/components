import { Component } from '@stencil/core';
import { daysBetween, addDays, formatDate, formatDateForInput, compareDates, dateDiff } from '../../common/dates';


@Component({
    tag: 'simple-step',
    styleUrl: 'simple-step.css'
})
export class SimpleStep {

    displayErrors(values, name) {
        if (!values['errors'] || !values['errors'][name]) {
            return ''
        }
        return (<p class="error">{values['errors'][name]}</p>)
    }
    
    results () {
        const partitionDays = (values) =>  compareDates(values['breedingDate'], new Date()) == 1 ? 0 : daysBetween(new Date(), values['breedingDate']);
        const currentTrimester = (days) => days < 94 ? 'first' : (days > 187 ? 'third' : 'second');

        return {
            render: (values, reset) => (
                <agc-flex-stack height="30vh">
                    <agc-card slot="content" noBorder="true">
                        <agc-counter-row>
                            <agc-counter icon="fa fa-calendar" label="Calving Date" counter={`${formatDate(values['calvingDate'])}`}
                                renderFunc={() => (<span>283 day partition</span>)}
                            ></agc-counter>
                            <agc-counter icon="fa fa-sun" label="Days to Calving" counter={`${compareDates(values['calvingDate'], new Date()) == -1 ? 0 : daysBetween(new Date(), values['calvingDate'])}`} renderFunc={() => compareDates(values['calvingDate'], new Date()) == -1 ? '~ ~ ~ ~ ~ ~' : dateDiff(values['calvingDate'], new Date()).toMonthString()}></agc-counter>
                            {compareDates(values['breedingDate'], new Date()) != 1 && <agc-counter icon="fa fa-sun" label="Days in Partition" counter={`${partitionDays(values) > 283 ? 283 : partitionDays(values)}`} renderFunc={() => `${currentTrimester(partitionDays(values))} trimester`}></agc-counter>}
                            {compareDates(values['breedingDate'], new Date()) == 1 &&
                                <agc-counter icon="fa fa-sun" label="Days to Breeding" counter={`${daysBetween(new Date(), values['breedingDate'])}`}
                                    renderFunc={() => (<span>{formatDate(values['breedingDate'])}</span>)}></agc-counter>}
                        </agc-counter-row>
                        <agc-counter-row>
                            <agc-counter label="First Trimester" icon="fa fa-calendar" size="sm" counter={`${formatDate(values['breedingDate'])}`} renderFunc={()=> <span>@ 0 Days</span>}></agc-counter>
                            <agc-counter label="Second Trimester" icon="fa fa-calendar" size="sm" counter={`${formatDate(addDays(values['breedingDate'], 94))}`} renderFunc={()=> <span>@ 94 Days</span>}></agc-counter>
                            <agc-counter label="Third Trimester" icon="fa fa-calendar" size="sm" counter={`${formatDate(addDays(values['breedingDate'], 188))}`} renderFunc={()=> <span>@ 188 Days</span>}></agc-counter>
                        </agc-counter-row>
                        <br /><br />
                        <agc-rating eventId="simple-step-calculator" steps={5} label="Rate this calculator" ratedLabel="Average 4.5 stars"></agc-rating>
                    </agc-card>
                    
                    <agc-form-footer renderFeedbackFunc={() => (<a href="#">← Try the Cattle Breeding Date Calculator</a>)} slot="footer" actions={{next: { text: 'Start Over', action: reset}}}></agc-form-footer>
                </agc-flex-stack>
            )
        }
    }
    render() {
        return (
            <div>
                <agc-centered renderItemsFunc={() => [
                    <h1 class="form-title">Calving Date Calculator</h1>,
                    <p class="form-description">Determine the calving date for your bred heifer or cow.</p>,
                    (<agc-multistep enterTransition="slideLeft" leaveTransition="fade" errorTransition="shake"  name="simpleForm" contentHeight="180px" steps={1} stepsFunc={ (currentStep, values) => {
                        switch (currentStep) {
                            case 0:
                                return this.results();
                            case 1:
                                return {
                                    title: 'What is the desired / actual breeding date?',
                                    nextText: 'Calculate',
                                    render: (values)  => {
                                        return (<div class={ values.errors.breedingDate ? 'field-errors' : ''}>
                                            <input id="breedingDate" type="date" value={formatDateForInput(values.breedingDate)} name='breedingDate' />
                                            {this.displayErrors(values, 'breedingDate')}
                                        </div>)
                                    },
                                    validate: (values, setError) => {
                                        
                                        if (!values.breedingDate) {
                                            setError('breedingDate', 'Please select a breeding date!');
                                            return false;
                                        }

                                        setError('breedingDate', '');
                                        return true;
    
                                    },
                                    onStepComplete: (values, form) => {
                                        values['breedingDate'] = form.querySelector('#breedingDate').value;
                                        values['calvingDate'] = addDays(values['breedingDate'], 283);
                                        return values;
                                    }
                                }
                        }
    
                        return (
                        <div>Step {currentStep}!
                            <p>{JSON.stringify(values)}</p>
                        </div>)
    
                    }}></agc-multistep>),
                    <a class="install" href="#">Install the ag-calculators app</a>
                ]}></agc-centered>
                
            </div>
        );
    }
}
