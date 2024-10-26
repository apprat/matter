import { useElement, JSXAttributes } from './core/element.js'
import { Theme } from './page.js'

const name = 's-appbar'
const props = {
}

const style = /*css*/`
:host{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 64px;
  background: var(--s-color-surface-container, ${Theme.colorSecondaryContainer});
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 0 8px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
::slotted([slot=navigation]){
  margin-left: 4px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
::slotted([slot=logo]){
  margin-left: 12px;
  height: 32px;
  fill: var(--s-color-primary, ${Theme.colorPrimary});
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
::slotted([slot=headline]){
  font-size: 1.375rem;
  font-weight: 400;
  overflow: hidden;
  text-transform: capitalize;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 12px;
  color: var(--s-color-on-surface, ${Theme.colorOnSurface});
}
::slotted([slot=action]){
  margin: 0 4px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.view{
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
::slotted([slot=search]){
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: var(--s-color-surface, ${Theme.colorSurface});
  height: 40px;
  border-radius: 20px;
  max-width: 100%;
  margin: 0 4px 0 8px;
}
::slotted(s-appbar){
  height: 100%;
  width: 100%;
  max-width: 1280px;
  background: none;
  margin: 0 auto;
  padding: 0;
}
@media(max-width: 768px){
  :host{
    height: 56px;
  }
  ::slotted([slot=search]){
    width: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
}
`;

const template = /*html*/`
<slot name="start"></slot>
<slot name="navigation"></slot>
<slot name="logo"></slot>
<slot name="headline"></slot>
<div class="view" part="view">
  <slot></slot>
  <slot name="search"></slot>
</div>
<slot name="action"></slot>
<slot name="end"></slot>
`

export class Appbar extends useElement({
  style, template, props
}) { }

Appbar.define(name)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name]: Partial<typeof props> & JSXAttributes
    }
  }
  interface HTMLElementTagNameMap {
    [name]: Appbar
  }
}

//@ts-ignore
declare module 'vue' {
  export interface GlobalComponents {
    [name]: typeof props
  }
}