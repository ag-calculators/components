import { Component, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'agc-rating',
    styleUrl: 'agc-rating.css'
})
export class AgcRating {

    @State() score: number;
    @State() rated: boolean;
    @Prop() eventId: string;
    @Prop() steps: number;
    @Prop() label: string;
    @Prop() ratedLabel: string = "Thank you!";
    @Event() ratingCompleted: EventEmitter;
    

    rate (score, e) {
        e.preventDefault();
        if (this.rated) return;
        this.score = score;
        this.rated = true;

        console.log('this', this);
        this.ratingCompleted.emit({id: this.eventId, score: this.steps - this.score});
        
    }

    render() {

        
        let nums = Array.apply(null, {length: this.steps}).map(Function.call, Number);
        return (
            <div class="rating">
                {!this.rated && this.label && <p class="rating__label">{this.label}</p>}
                {this.rated && <p class="rating__label">{this.ratedLabel}</p>}
                {nums.map(n => {
                    return ( n > this.score - 1 ? <span class="active" data-rating={n}>☆</span> : <span onClick={this.rate.bind(this, n)} data-rating={n}>☆</span>)
                })}
            </div>
        );
    }
}
