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
   >
      Stylishh Tooltip
   </StylishhTooltip>
</div>

```
