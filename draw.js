// Draw a triangle from 3 points ABC (simplified method)
export const drawTriangleFromPoints = (sketch, A, B, C) => {
    sketch.triangle(
        A.x,
        A.y,
        B.x,
        B.y,
        C.x,
        C.y);
}
