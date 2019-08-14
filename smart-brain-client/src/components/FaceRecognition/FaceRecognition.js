import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxes }) => {
    const faces = boxes.map((face, i) => {
        return (
        <div
            key={i}
            className='bounding-box'
            style={{
                top: face.topRow,
                right: face.rightCol,
                bottom: face.bottomRow,
                left: face.leftCol
            }}
        />
        )
    });

    return (
        <div className='center ma'>
            <div className="absolute mt2">
                <img id='inputImage' alt="" src={imageUrl} width="500px" height="auto" />
                {faces}
            </div>
        </div>
    )
}

export default FaceRecognition;