import { useElement } from './core/element.js'
import { Theme } from './core/theme.js'
import './ripple.js'

const name = 's-field'
const props = {
  focused: false,
  fixed: true
}

const style = /*css*/`
:host{
  display: inline-block;
  vertical-align: middle;
  height: 48px;
  min-height: inherit;
  font-size: .875rem;
  flex-shrink: 0;
  --field-padding: 16px;
  --field-border-radius: 4px;
  --field-border-width: 1px;
  --field-border-color: var(--s-color-outline, ${Theme.colorOutline});
  --field-focused-border-width: 2px;
}
.container{
  display: flex;
  height: 100%;
  min-height: inherit;
}
.side{
  position: relative;
}
.side::before,
.side::after{
  content: '';
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-color: var(--field-border-color);
  border-width: var(--field-border-width);
  pointer-events: none;
}
.side::after{
  border-width: var(--field-focused-border-width);
  border-color: var(--s-color-primary, ${Theme.colorPrimary});
  opacity: 0;
  transition: opacity .1s ease-out;
}
:host([focused=true]) .side::after{
  opacity: 1;
}
.cell{
  display: flex;
  align-items: center;
  position: relative;
  min-width: var(--field-border-radius);
  flex-shrink: 0;
}
.cell::before,
.cell::after{
  border-style: solid;
}
.start::before,
.start::after{
  border-right: none;
  border-radius: var(--field-border-radius) 0 0 var(--field-border-radius);
}
.end::before,
.end::after{
  border-left: none;
  border-radius: 0 var(--field-border-radius) var(--field-border-radius) 0;
}
.box{
  margin: 0 calc(var(--field-border-radius) * -1);
  flex-grow: 1;
  position: static;
  max-width: 100%;
}
.box::before,
.box::after{
  border-bottom-style: solid;
  left: var(--field-border-radius);
  width: calc(100% - var(--field-border-radius) * 2);
}
.view{
  display: flex;
  height: 100%;
}
.legend{
  display: flex;
  pointer-events: none;
  position: relative;
  min-height: 100%;
  height: 0;
  top: -100%;
}
.legend::before,
.legend::after{
  border-top-style: solid;
  left: var(--field-border-radius);
  width: calc(100% - var(--field-border-radius) * 2);
  content: none;
}
:host([fixed=false]) .legend::before,
:host([fixed=false]) .legend::after{
  content: '';
}
.label{
  color: var(--field-border-color);
  position: relative;
  height: 100%;
}
:host([focused=true]) .label{
  color: var(--s-color-primary, ${Theme.colorPrimary});
}
::slotted([slot=label]){
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transform: translateY(-50%) scale(.8571428571428571);
  transition: color .1s ease-out, transform .1s ease-out;
}
:host([fixed=false]) ::slotted([slot=label]){
  transform: translateY(0) scale(1);
}
.left,.right{
  height: 0;
  width: var(--field-padding);
}
.right{
  flex-grow: 1;
}
.left::before,
.left::after,
.right::before,
.right::after{
  border-top-style: solid;
  left: var(--field-border-radius);
  width: calc(100% - var(--field-border-radius));
}
.right::before,
.right::after{
  left: 0;
}
::slotted([slot=start]){
  margin-right: var(--field-border-radius);
}
::slotted(:not([slot])){
  padding: 0 var(--field-padding);
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: var(--field-border-radius);
}
::slotted([slot=end]){
  margin-left: var(--field-border-radius);
}
`

const template = /*html*/`
<div class="container side">
  <slot name="start" class="start side cell"></slot>
  <div class="box side">
    <slot class="view"></slot>
    <div class="legend side">
      <div class="left side"></div>
      <slot name="label" class="label"></slot>
      <div class="right side"></div>
    </div>
  </div>
  <slot name="end" class="end side cell"></slot>
</div>
`

export class Field extends useElement({
  style, template, props, syncProps: true
}) { }

Field.define(name)

declare global {
  interface HTMLElementTagNameMap {
    [name]: Field
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        //@ts-ignore
        [name]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<typeof props>
      }
    }
  }
}

//@ts-ignore
declare module 'vue' {
  export interface GlobalComponents {
    [name]: typeof props
  }
}