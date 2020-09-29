// Comp_04_1202
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6010 from './Comp_05_6010';
import Comp_05_6011 from './Comp_05_6011';
import Comp_05_6012 from './Comp_05_6012';
import Comp_05_6013 from './Comp_05_6013';
import Comp_05_6014 from './Comp_05_6014';

const Comp_04_1202: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1202
      <div>
      <Comp_05_6010></Comp_05_6010>';
<Comp_05_6011></Comp_05_6011>';
<Comp_05_6012></Comp_05_6012>';
<Comp_05_6013></Comp_05_6013>';
<Comp_05_6014></Comp_05_6014>';
        </div>
      </div>;
};

export default Comp_04_1202;
