// Draw a triangle from 3 points ABC
export const drawTriangleFromPoints = (sketch, A, B, C) => {
    sketch.triangle(
        A.x,
        A.y,
        B.x,
        B.y,
        C.x,
        C.y);
}

// Draw equilateral triangle ABC from segment [DF], [AB] equal to 1/3 of DF
export const drawTriangleFromSegment = (sketch, D, F) => {

    // Vectors
    let Ux = F.x - D.x;
    let Uy = F.y - D.y;
    let Vx = D.y - F.y;
    let Vy = F.x - D.x;

    // Coordinate
    // minus Vx/Vy because y-axis reverted
    let Ax = D.x + (1 / 3) * Ux;
    let Ay = D.y + (1 / 3) * Uy;
    let Bx = D.x + (1 / 2) * Ux + (-Vx * (Math.sqrt(3) / 6));
    let By = D.y + (1 / 2) * Uy + (-Vy * (Math.sqrt(3) / 6));
    let Cx = D.x + (2 / 3) * Ux;
    let Cy = D.y + (2 / 3) * Uy;

    // Draw
    sketch.triangle(
        Ax,
        Ay,
        Bx,
        By,
        Cx,
        Cy,
    );

    // return points to store segments
    return {
        A: {x: Ax, y: Ay},
        B: {x: Bx, y: By},
        C: {x: Cx, y: Cy}
    };
}

// from segments, iterate to draw all triangles
export const drawIteration = (sketch, segmentsToIterate) => {
    // store segments to add
    let newSegments = []
    segmentsToIterate.forEach(([D, F]) => {
        // get points from triangle
        let triangle = drawTriangleFromSegment(sketch, D, F);
        // add new segments (from D-F segment draw ABC triangle, so we have D-A, A-B, B-C, C-F)
        newSegments.push([D, triangle.A], [triangle.A, triangle.B], [triangle.B, triangle.C], [triangle.C, F]);
    });
    return newSegments;
}