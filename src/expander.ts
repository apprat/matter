import { useElement, JSXAttributes, LowercaseKeys } from './core/element.js'
import './ripple.js'
import './scroll-view.js'

const name = 's-expander'
const props = {
  expand: false
}

const style = /*css*/ `
:host{
  display: block;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}
.trigger{
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.wrapper{
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.12s;
}
:host([expand=true]) .wrapper{
  grid-template-rows: 1fr;
}
.container{
  padding: 10px;
  max-height: 600px;
}
:host(:not([expand=true])) .container{
  min-height: 0;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
}
.icon{
  transform: rotate(0deg);
  transition: transform 0.12s;
  height: 24px;
}
:host([expand=true]) .icon{
  transform: rotate(180deg);
}
`

const template = /*html*/ `
<div id="trigger" part="trigger">
  <slot name="trigger">
    <s-ripple class="trigger" part="trigger">
      <slot name="text"></slot>
      <svg viewBox="0 -960 960 960" class="icon">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
    </s-ripple>
  </slot>
</div>
<div class="wrapper" part="wrapper">
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</div>
`

export class Expander extends useElement({
  style, template, props, syncProps: true,
  setup(shadowRoot) {
    const trigger = shadowRoot.querySelector('#trigger') as HTMLDivElement
    const open = () => {
      if (!this.isConnected || this.expand) return
      this.expand = true
      this.dispatchEvent(new Event('open'))
    }
    const close = () => {
      if (!this.isConnected || !this.expand) return
      this.expand = false
      this.dispatchEvent(new Event('close'))
    }
    const toggle = () => {
      if (!this.isConnected) return
      this.expand ? close() : open()
    }
    trigger.addEventListener('click', () => toggle())
    return {
      expose: { open, close, toggle }
    }
  }
}) {}

Expander.define(name)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name]: Partial<LowercaseKeys<typeof props>> & JSXAttributes
    }
  }
  interface HTMLElementTagNameMap {
    [name]: Expander
  }
}

//@ts-ignore
declare module 'vue' {
  export interface GlobalComponents {
    [name]: LowercaseKeys<typeof props>
  }
}
