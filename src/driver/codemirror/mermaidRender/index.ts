// Whole below code come from PR: https://github.com/SeptemberHX/joplin-plugin-enhancement/blob/59b30e5bfea6c95f99c0cbb8fab5974508c3bb8b/src/driver/codemirror/mermaidRender/index.ts
import {CMBlockMarkerHelper} from "../../../utils/CMBlockMarkerHelper";
import mermaid from 'mermaid'
import {LineHandle} from "codemirror";

const ENHANCEMENT_MERMAID_SPAN_MARKER_CLASS = 'enhancement-mermaid-block-marker';
const ENHANCEMENT_MERMAID_SPAN_MARKER_LINE_CLASS = 'enhancement-mermaid-block-marker-line';

// Initialise the mermaid API.
mermaid.initialize({ startOnLoad: false })

export default function mermaidRender(cm) {
    // Block Katex Math Render
    new CMBlockMarkerHelper(cm, null, /^\s*```mermaid\s*$/, /^\s*```\s*$/, (beginMatch, endMatch, content, fromLine, toLine) => {
        // code from zettlr
        let svg = document.createElement('span')
        svg.innerText = "..."
        svg.classList.add('mermaid-chart')
        mermaid.render(`graphDivL${fromLine}-L${toLine}${Date.now()}`, content).then((renderResult) => {
            svg.innerHTML = renderResult.svg
        }, (err) => {
            svg.classList.add('error')
            // TODO: Localise!
            svg.innerText = `Could not render Graph:\n\n${err.message as string}`
        })
        return svg;
    }, () => {
        const span = document.createElement('span');
        span.textContent = '===> Folded Mermaid Code Block <===';
        span.style.cssText = 'color: lightgray; font-size: smaller; font-style: italic;';
        return span;
    },ENHANCEMENT_MERMAID_SPAN_MARKER_CLASS, true);

    cm.on('renderLine', (editor, line: LineHandle, element: Element) => {
        if (element.getElementsByClassName(ENHANCEMENT_MERMAID_SPAN_MARKER_CLASS).length > 0) {
            element.classList.add(ENHANCEMENT_MERMAID_SPAN_MARKER_LINE_CLASS);
        }
    })
}