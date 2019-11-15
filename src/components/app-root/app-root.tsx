import "@stencil/redux";
import { Component, h, Prop, State } from '@stencil/core';
import { Store } from "@stencil/redux";
import { configureStore } from "../../store";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State()
  selectedFamily: MyAppState["data"]["selectedFamily"];

  @Prop({ context: "store" })
  store: Store;

  async componentWillLoad() {
    this.store.setStore(configureStore({}));
    this.store.mapStateToProps(this, (state: MyAppState) => {
      const { data: { selectedFamily } } = state;
      return {
        selectedFamily
      };
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>JSON Editor: {this.selectedFamily}</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
