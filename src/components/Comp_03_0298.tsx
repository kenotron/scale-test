// Comp_03_0298
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1490 from './Comp_04_1490';
import Comp_04_1491 from './Comp_04_1491';
import Comp_04_1492 from './Comp_04_1492';
import Comp_04_1493 from './Comp_04_1493';
import Comp_04_1494 from './Comp_04_1494';

const Comp_03_0298: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0298
      <div>
      <Comp_04_1490></Comp_04_1490>';
<Comp_04_1491></Comp_04_1491>';
<Comp_04_1492></Comp_04_1492>';
<Comp_04_1493></Comp_04_1493>';
<Comp_04_1494></Comp_04_1494>';
        </div>
      </div>;
};

export default Comp_03_0298;
