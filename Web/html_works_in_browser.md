1 -> HTML Parse
2 -> Load External CSS and JS 
### script it is parser blocking -> it load js file one by one **RENDER WILL NOT GET BLOCKED**
3 -> CSS Parse render CSSOM css render blocking -> load css after all css is parse
4 -> Rendering Tree -> combines DOM + CSSOM
5 -> Layout -> Basic layout is generated
6 -> Paint -> FCP, CLS
        FCP (First Contentful Paint): The time when the browser renders the first piece of DOM content (like text or image, loading).

        CLS (Cumulative Layout Shift): Measures visual stability — how much elements move unexpectedly during load.
7 -> Reflow