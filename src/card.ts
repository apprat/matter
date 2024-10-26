import { useElement, JSXAttributes } from './core/element.js'
import { Theme } from './page.js'
import './ripple.js'

const name = 's-card'
const props = {
  type: 'standard' as 'standard' | 'filled' | 'outlined',
  clickable: false
}

const style = /*css*/`
:host{
  display: inline-block;
  vertical-align: middle;
  background: var(--s-color-surface-container-low, ${Theme.colorSurfaceContainerLow});
  -webkit-box-shadow: var(--s-elevation-level1, ${Theme.elevationLevel1});
  box-shadow: var(--s-elevation-level1, ${Theme.elevationLevel1});
  border-radius: 12px;
  position: relative;
  font-size: .875rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 280px;
  color: var(--s-color-on-surface, ${Theme.colorOnSurface});
  overflow: hidden;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
:host([type=filled]){
  background: var(--s-color-surface-container-highest, ${Theme.colorSurfaceContainerHighest});
  -webkit-box-shadow: none;
  box-shadow: none;
}
:host([type=outlined]){
  background: var(--s-color-surface, ${Theme.colorSurface});
  border: solid 1px var(--s-color-outline-variant, ${Theme.colorOutlineVariant});
  -webkit-box-shadow: none;
  box-shadow: none;
}
:host([clickable=true]){
  cursor: pointer;
  -webkit-transition: -webkit-box-shadow .1s ease-out;
  transition: -webkit-box-shadow .1s ease-out;
  -o-transition: box-shadow .1s ease-out;
  transition: box-shadow .1s ease-out;
  transition: box-shadow .1s ease-out, -webkit-box-shadow .1s ease-out;
}
:host([clickable=true]) .ripple{
  display: block;
}
.action{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  gap: 8px;
}
.ripple{
  display: none;
  border-radius: 0;
}
::slotted([slot=image]){
  display: block;
  height: 128px;
  background: var(--s-color-surface-container-high, ${Theme.colorSurfaceContainerHigh});
}
::slotted([slot=headline]){
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 16px 16px 0 16px;
}
::slotted([slot=subhead]){
  font-size: 1rem;
  line-height: 1.6;
  margin: 4px 16px;
}
::slotted([slot=text]){
  line-height: 1.6;
  margin: 8px 16px;
  color: var(--s-color-on-surface-variant, ${Theme.colorOnSurfaceVariant});
}
::slotted(s-button[slot=action]){
  margin: 16px 0;
}
::slotted(s-button[slot=action]:last-of-type){
  margin-right: 16px;
}
@media (pointer: fine){
  :host([clickable=true][type=filled]:hover),
  :host([clickable=true][type=outlined]:hover){
    -webkit-box-shadow: var(--s-elevation-level1, ${Theme.elevationLevel1});
    box-shadow: var(--s-elevation-level1, ${Theme.elevationLevel1});
  }
  :host([clickable=true]:hover){
    -webkit-box-shadow: var(--s-elevation-level2, ${Theme.elevationLevel2});
    box-shadow: var(--s-elevation-level2, ${Theme.elevationLevel2});
  }
}
`

const template = /*html*/`
<slot name="start"></slot>
<slot name="image"></slot>
<slot name="headline"></slot>
<slot name="subhead"></slot>
<slot name="text"></slot>
<slot></slot>
<div class="action" part="action">
  <slot name="action"></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`

export class Card extends useElement({
  style, template, props, syncProps: true,
  setup(shadowRoot) {
    const action = shadowRoot.querySelector('slot[name=action]') as HTMLElement
    action.addEventListener('pointerdown', (e) => e.stopPropagation())
  }
}) { }

Card.define(name)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name]: Partial<typeof props> & JSXAttributes
    }
  }
  interface HTMLElementTagNameMap {
    [name]: Card
  }
}

//@ts-ignore
declare module 'vue' {
  export interface GlobalComponents {
    [name]: typeof props
  }
}