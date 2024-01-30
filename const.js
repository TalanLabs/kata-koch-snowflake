export const [WIDTH, HEIGHT] = [window.innerWidth, window.innerHeight];
export const WINDOW_CENTER = {x: WIDTH / 2, y: HEIGHT / 2};

// Size to be set by user
export const TRIANGLE_SIZE = 600;
export const TRIANGLE_HEIGHT = (Math.sqrt(3) / 2) * TRIANGLE_SIZE;

// centered triangle
export const [FIRST_POINT, SECOND_POINT, THIRD_POINT] = [
    {
        x: WINDOW_CENTER.x - TRIANGLE_SIZE / 2,
        y: WINDOW_CENTER.y + TRIANGLE_HEIGHT / 2,
    },
    {
        x: WINDOW_CENTER.x,
        y: WINDOW_CENTER.y - TRIANGLE_HEIGHT / 2
    },
    {
        x: WINDOW_CENTER.x + TRIANGLE_SIZE / 2,
        y: WINDOW_CENTER.y + TRIANGLE_HEIGHT / 2,
    },
];

export const STARTING_SEGMENTS = [
    [FIRST_POINT, SECOND_POINT],
    [SECOND_POINT, THIRD_POINT],
    [THIRD_POINT, FIRST_POINT]
];
