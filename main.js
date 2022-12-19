import {drawIteration, drawTriangleFromPoints} from "./draw.js";
import {FIRST_POINT, HEIGHT, SECOND_POINT, STARTING_SEGMENTS, THIRD_POINT, WIDTH} from "./const.js";

const myp5 = new p5((sketch) => {

    // to store segment created at each iteration
    // and iterate over them the next iteration
    // segments[0] = our first triangle (composed of 3 segments)
    let segments = [STARTING_SEGMENTS];

    // define a slider, and it's method 'onChange' to iterate on our koch flake
    let slider = sketch.createSlider(0, 6, 0);
    slider.position(0, 0);
    slider.style('width', '200px')
    // for keeping track on previous slider value
    let previousSliderValue;
    const onChange = () => {
        // Backward
        if (slider.value() < previousSliderValue) {
            // reset background
            sketch.background(255);
            // draw initial triangle
            drawTriangleFromPoints(sketch, FIRST_POINT, SECOND_POINT, THIRD_POINT);
            // replay triangles drawing from the beginning
            for (let i = 0; i < previousSliderValue - 1; i++) {
                drawIteration(sketch, segments[i]);
            }
        } else {
            sketch.redraw();
        }
        // keep state of previous value (in order to know if we're moving backward or forward)
        previousSliderValue = slider.value();
    }
    // attach
    slider.input(onChange);

    // Setup function
    sketch.setup = () => {
        // Define a canvas of the size of the screen
        sketch.createCanvas(WIDTH, HEIGHT);
        // loop controlled by slider
        sketch.noLoop();
    };

    // Draw function
    sketch.draw = () => {
        // always draw our first triangle
        drawTriangleFromPoints(sketch, FIRST_POINT, SECOND_POINT, THIRD_POINT);

        // get slider value
        let sliderValue = slider.value()
        if (sliderValue > 0) {
            segments[sliderValue] = drawIteration(sketch, segments[sliderValue - 1])
        }
    }
});

