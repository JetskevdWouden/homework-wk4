export const SELECTED_DATA = "SELECTED_DATA"

export function clickHandler(props) {
    console.log("IM RUNNING")
    console.log("WHAT ARE MY PROPS?!", props)
    return {
      type: "SELECTED_DATA",
      payload: props
    }
  }