declare type Shape = 'rect' | 'circle'

declare interface CanvasDrawer {
	draw(ctx: CanvasRenderingContext2D): void;
	next(): void;
}

declare interface CanvasArtifact {
	draw(ctx: CanvasRenderingContext2D): void;
	getPath(x: number, y: number): string | null;
}