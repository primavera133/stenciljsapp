import { Component, State, Prop, h, Listen } from "@stencil/core";
import { Store, Unsubscribe } from "@stencil/redux";
import { setSelectedFamily } from "../../store/actions/data";

import config from "./config";

const families = Object.keys(config.dataTree);

@Component({
    tag: 'nav-selector',
    styleUrl: 'nav-selector.css',
    shadow: true
})
export class NavSelector {
    storeUnsubscribe: Unsubscribe;
    setSelectedFamily: typeof setSelectedFamily;

    @State()
    selectedFamily: MyAppState["data"]["selectedFamily"];

    @Prop({ context: "store" })
    store: Store;


    componentWillLoad() {
        this.store.mapDispatchToProps(this, { setSelectedFamily });
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const { data: { selectedFamily } } = state;
            return { selectedFamily };
        });
    }

    componentDidUnload() {
        this.storeUnsubscribe();
    }

    @Listen('selectFamily')
    handleSetSelected(event: CustomEvent) {
        this.setSelectedFamily(event.detail)
    }

    render() {
        return (
            <nav>
                <p>{this.selectedFamily}</p>
                <my-select opts={families} />
            </nav>
        );
    }
}