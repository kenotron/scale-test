// Comp_04_0898
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4490 from './Comp_05_4490';
import Comp_05_4491 from './Comp_05_4491';
import Comp_05_4492 from './Comp_05_4492';
import Comp_05_4493 from './Comp_05_4493';
import Comp_05_4494 from './Comp_05_4494';

const Comp_04_0898: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0898
      <div>
      <Comp_05_4490></Comp_05_4490>';
<Comp_05_4491></Comp_05_4491>';
<Comp_05_4492></Comp_05_4492>';
<Comp_05_4493></Comp_05_4493>';
<Comp_05_4494></Comp_05_4494>';
        </div>
      </div>;
};

export default Comp_04_0898;
