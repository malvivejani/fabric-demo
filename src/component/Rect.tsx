import React, { useEffect } from 'react';
import { fabric } from "fabric";


function Rect(props: any) {
    const { canvas } = props;
    useEffect(() => {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });
        canvas.add(rect);

    });
    return null;
}

export default Rect;
