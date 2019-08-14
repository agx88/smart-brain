import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className='ma4 mt0'>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            placeholder="insert URL"
            className='f4 pa2 w-60 center'
            type='text'
            onChange={onInputChange}
            onKeyPress={event => { if (event.key === 'Enter') return onPictureSubmit() }}
          />
          <button
            className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onPictureSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;