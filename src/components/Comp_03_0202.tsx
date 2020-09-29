// Comp_03_0202
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1010 from './Comp_04_1010';
import Comp_04_1011 from './Comp_04_1011';
import Comp_04_1012 from './Comp_04_1012';
import Comp_04_1013 from './Comp_04_1013';
import Comp_04_1014 from './Comp_04_1014';

const Comp_03_0202: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0202
      <div>
      <Comp_04_1010></Comp_04_1010>';
<Comp_04_1011></Comp_04_1011>';
<Comp_04_1012></Comp_04_1012>';
<Comp_04_1013></Comp_04_1013>';
<Comp_04_1014></Comp_04_1014>';
        </div>
      </div>;
};

export default Comp_03_0202;
