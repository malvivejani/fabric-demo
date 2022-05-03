import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fabric } from "fabric";
import Rect from './component/Rect';
import dog_image from './image/dog.jpeg';

function App() {
  const [canvas, setCanvas]: any = useState('');

  const initCanvas = () => (
    new fabric.Canvas('b', {
      height: 168,
      width: 300,
      backgroundColor: 'pink'
    })
  );

  var rect = new fabric.Rect({
    left: 50,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
  });

  useEffect(() => {
    setCanvas(initCanvas());
    // canvas.add(rect)
  }, []);

  const addImage = () => {
    fabric.Image.fromURL(dog_image, function (img) {
      img.set({
        left: 0,
        top: 0,
        height: 200,
        width: 400
      })
      canvas.add(img).setActiveObject(img);
    })

  }

  return (
    <div className="App" style={{ display: 'flex', flex: 1 }}>
      {/* <img src={dog_image} style={{ height: 200, width: 200 }} /> */}
      <canvas id="b" />

      <div style={{}}>
        <button title="add rect" onClick={() => { addImage() }} style={{ height: 50, width: 50 }} />
      </div>

    </div>

  );
}

export default App;
