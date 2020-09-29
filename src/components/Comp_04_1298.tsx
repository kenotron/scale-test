// Comp_04_1298
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6490 from './Comp_05_6490';
import Comp_05_6491 from './Comp_05_6491';
import Comp_05_6492 from './Comp_05_6492';
import Comp_05_6493 from './Comp_05_6493';
import Comp_05_6494 from './Comp_05_6494';

const Comp_04_1298: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1298
      <div>
      <Comp_05_6490></Comp_05_6490>';
<Comp_05_6491></Comp_05_6491>';
<Comp_05_6492></Comp_05_6492>';
<Comp_05_6493></Comp_05_6493>';
<Comp_05_6494></Comp_05_6494>';
        </div>
      </div>;
};

export default Comp_04_1298;
