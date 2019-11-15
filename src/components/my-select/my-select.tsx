import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'my-select',
    styleUrl: 'my-select.css',
    shadow: true
})
export class MySelect {
    @Prop()
    opts: Array<string>;

    @Event()
    selectFamily: EventEmitter;

    handleSelectChange(e: any) {
        this.selectFamily.emit(e.target.value)
    }

    render() {
        return (
            <select onChange={(e) => this.handleSelectChange(e)}>
                <option value="">Välj en..</option>
                {this.opts.map(opt => (
                    <option value={opt}>{opt}</option>
                ))}
            </select>
        );
    }
}