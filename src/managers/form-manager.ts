
export default class FormManager  {
    values: {};
    name: string;
    change: (values: any) => void;

    constructor (name: string, change: (values: any) => void ) {
        this.name = name;
        this.values = {};
        this.change = change;
    }
    setValue(name: string, value: any) {
        let current = this.values[name];
        
        if (current != value) {
            let newValue = {};
            newValue[name] = value;
            this.values = Object.assign({}, this.values, newValue);
            this.change(this.values);
        }

    }
    getValue(name: string) {
        return this.values[name];
    }
}