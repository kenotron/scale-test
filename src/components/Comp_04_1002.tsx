// Comp_04_1002
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5010 from './Comp_05_5010';
import Comp_05_5011 from './Comp_05_5011';
import Comp_05_5012 from './Comp_05_5012';
import Comp_05_5013 from './Comp_05_5013';
import Comp_05_5014 from './Comp_05_5014';

const Comp_04_1002: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1002
      <div>
      <Comp_05_5010></Comp_05_5010>';
<Comp_05_5011></Comp_05_5011>';
<Comp_05_5012></Comp_05_5012>';
<Comp_05_5013></Comp_05_5013>';
<Comp_05_5014></Comp_05_5014>';
        </div>
      </div>;
};

export default Comp_04_1002;
