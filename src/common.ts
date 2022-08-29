export const ENABLE_TABLE_FORMATTER = 'enableTableFormatter';
export const ENABLE_LOCAL_PDF_PREVIEW = 'enableLocalPDFPreview';
export const ENABLE_IMAGE_ENHANCEMENT = 'enableImageEnhancement';
export const ENABLE_QUICK_COMMANDS = 'enableQuickCommands';
export const ENABLE_PSEUDOCODE = 'enablePseudocode';
export const ENABLE_ADMONITION_CM_RENDER = 'enableAdmonitionCmRender';
export const ENABLE_FRONT_MATTER = 'enhancementEnableFrontMatter';
export const ENABLE_COLORFUL_QUOTE = 'enhancementEnableColorfulQuote';
export const ENABLE_LINK_FOLDER = 'enhancementEnableLinkFolder';
export const ENABLE_SEARCH_REPLACE = 'enhancementEnableSearchReplace';
export const ENABLE_INLINE_MARKER = 'enhancementEnableInlineMarker';
export const ENABLE_FOCUS_MODE = 'enhancementEnableFocusMode';
export const ENABLE_INDENT_BORDER = 'enhancementEnableIndentBorder';
export const ENABLE_TASK_RENDER = 'enhancementEnableTaskRender';
export const ENABLE_MATH_RENDER = 'enhancementEnableMathRender';
export const ENABLE_MERMAID_RENDER = 'enhancementEnableMermaidRender';


export class EnhancementConfig {
    public tableFormatter: boolean;
    public localPdfPreview: boolean;
    public imageEnhancement: boolean;
    public quickCommands: boolean;
    public pseudocode: boolean;
    public admonitionCmRender: boolean;
    public frontMatterRender: boolean;
    public colorfulQuote: boolean;
    public linkFolder: boolean;
    public searchReplace: boolean;
    public inlineMarker: boolean;
    public focusMode: boolean;
    public indentBorder: boolean;
    public taskCmRender: boolean;
    public mathCmRender: boolean;
    public mermaidCmRender: boolean
}


export enum ContextMsgType {
    GET_SETTINGS,
    OPEN_URL,
    RESOURCE_PATH,
}


export class ContextMsg {
    type: ContextMsgType;
    content: any;
}
