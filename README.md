# Getting Started with Stylishh-Tooltip

Style boring Tooltips!

## Available Props

### id

Same id as the main container you want to show the tooltip

### mode

"light", "dark"

### type

"striped", "default"

### children,

Or display an entire div inside the tooltip

### styledClass

Customize Tooltip with "styledClass"

### timeOut

Customize time span to hide tooltips. default is 600ms!

```
import { StylishhTooltip } from 'stylishh-tooltip';
.
.
.
<div id="show-here">
    <p>My Text</p>

   <StylishhTooltip
      mode="dark"
      type="default"
      id={"show-here"}
      timeOut={800}
      styledClass={"top-10} //tailwind class
   >
      Stylishh Tooltip
   </StylishhTooltip>
</div>

```
