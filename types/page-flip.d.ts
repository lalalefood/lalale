declare module "page-flip" {
  export interface FlipSetting {
    startPage: number;
    size: "fixed" | "stretch";
    width: number;
    height: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    drawShadow: boolean;
    flippingTime: number;
    usePortrait: boolean;
    startZIndex: number;
    autoSize: boolean;
    maxShadowOpacity: number;
    showCover: boolean;
    mobileScrollSupport: boolean;
    swipeDistance: number;
    clickEventForward: boolean;
    useMouseEvents: boolean;
    showPageCorners: boolean;
    disableFlipByClick: boolean;
  }
  export type FlipCorner = "top" | "bottom";
  export class PageFlip {
    constructor(element: HTMLElement, settings: Partial<FlipSetting>);
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    loadFromImages(items: string[]): void;
    on(event: string, cb: (e: { data: unknown }) => void): this;
    flipNext(corner?: FlipCorner): void;
    flipPrev(corner?: FlipCorner): void;
    flip(page: number, corner?: FlipCorner): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    updateFromHtml(items: HTMLElement[]): void;
    destroy(): void;
  }
}
