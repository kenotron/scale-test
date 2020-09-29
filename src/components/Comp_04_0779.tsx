// Comp_04_0779
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3895 from './Comp_05_3895';
import Comp_05_3896 from './Comp_05_3896';
import Comp_05_3897 from './Comp_05_3897';
import Comp_05_3898 from './Comp_05_3898';
import Comp_05_3899 from './Comp_05_3899';

const Comp_04_0779: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0779
      <div>
      <Comp_05_3895></Comp_05_3895>';
<Comp_05_3896></Comp_05_3896>';
<Comp_05_3897></Comp_05_3897>';
<Comp_05_3898></Comp_05_3898>';
<Comp_05_3899></Comp_05_3899>';
        </div>
      </div>;
};

export default Comp_04_0779;
