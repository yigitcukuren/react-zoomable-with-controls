import React from 'react';
import { Zoom } from '../src/index';

export default { title: 'Zoom' };

export const withAStandardDiv = () => <Zoom><div>Hello Button2</div></Zoom>;

export const withAnImage = () => {
  const Image = () => <img src="https://m.media-amazon.com/images/I/91FxiyDiVtL._SS500_.jpg" />;
  return (
    <Zoom>
      <Image />
    </Zoom>
  );
};

export const withoutChildren = () => <Zoom/>;
