class CanvasDrawerParticle implements CanvasDrawer {
	x: number;
	y: number;
	r: number;

	constructor(x: number, y: number, r: number) {
		this.x = x;
		this.y = y;
		this.r = r;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = "black";
		ctx.fill();
	}
	next(): void {
		this.x += 0.1;
		this.y += 1;
	}
}

export let particleAction = new CanvasDrawerParticle(10, 10, 2);

class CanvasArtifactParticle implements CanvasArtifact {
	x: number;
	y: number;
	r: number;

	constructor(x: number, y: number, r: number) {
		this.x = x;
		this.y = y;
		this.r = r;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = "black";
		ctx.fill();
	}
	getPath(x: number, y: number): string | null {
		return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) <= this.r * this.r ? "/simulation/condition/setting" : null
	}
}

export let particleArtifact = new CanvasArtifactParticle(10, 10, 2);