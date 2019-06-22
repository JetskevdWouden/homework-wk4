export const SELECTED_DATA = "SELECTED_DATA"

export function clickHandler(props) {
  return {
    type: "SELECTED_DATA",
    payload: props
  }
}