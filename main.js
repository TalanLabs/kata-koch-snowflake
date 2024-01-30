import {drawTriangleFromPoints} from "./draw.js";
import {FIRST_POINT, HEIGHT, SECOND_POINT, STARTING_SEGMENTS, THIRD_POINT, WIDTH} from "./const.js";

const myp5 = new p5((sketch) => {

    // define a slider, and it's method 'onChange' to iterate on our koch snowflake
    let slider = sketch.createSlider(0, 6, 0);
    slider.position(0, 0);
    slider.style('width', '200px')
    // for keeping track on previous slider value
    let previousSliderValue;
    const onChange = () => {
        // Backward
        if (slider.value() < previousSliderValue) {
           // TODO : implement
        } else { // Forward
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
        // draw our first triangle
        drawTriangleFromPoints(sketch, FIRST_POINT, SECOND_POINT, THIRD_POINT);
        // TODO : implement
    }
});


