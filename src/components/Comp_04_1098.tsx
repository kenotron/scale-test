// Comp_04_1098
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5490 from './Comp_05_5490';
import Comp_05_5491 from './Comp_05_5491';
import Comp_05_5492 from './Comp_05_5492';
import Comp_05_5493 from './Comp_05_5493';
import Comp_05_5494 from './Comp_05_5494';

const Comp_04_1098: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1098
      <div>
      <Comp_05_5490></Comp_05_5490>';
<Comp_05_5491></Comp_05_5491>';
<Comp_05_5492></Comp_05_5492>';
<Comp_05_5493></Comp_05_5493>';
<Comp_05_5494></Comp_05_5494>';
        </div>
      </div>;
};

export default Comp_04_1098;
