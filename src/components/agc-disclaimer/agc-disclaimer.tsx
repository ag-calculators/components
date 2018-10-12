import { Component } from '@stencil/core';


@Component({
    tag: 'agc-disclaimer',
    styleUrl: 'agc-disclaimer.css'
})
export class AgcDisclaimer {
    render() {
        return (
            <div>
                The information presented here is only for providing estimates and in no way express any guarantee. These numbers should be used with caution and professional assistance, such as that provided by your local extension agent, who can help you to more accurately determine the production on your land and of your livestock. Stockpencil.com is not liable to you or any third party for any losses, costs or expenses resulting from any use or misuse of the information contained on this website. By utilizing the functionality on this website, you agree to these terms.
            </div>
        );
    }
}
