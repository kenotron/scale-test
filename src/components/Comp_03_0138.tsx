// Comp_03_0138
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0690 from './Comp_04_0690';
import Comp_04_0691 from './Comp_04_0691';
import Comp_04_0692 from './Comp_04_0692';
import Comp_04_0693 from './Comp_04_0693';
import Comp_04_0694 from './Comp_04_0694';

const Comp_03_0138: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0138
      <div>
      <Comp_04_0690></Comp_04_0690>';
<Comp_04_0691></Comp_04_0691>';
<Comp_04_0692></Comp_04_0692>';
<Comp_04_0693></Comp_04_0693>';
<Comp_04_0694></Comp_04_0694>';
        </div>
      </div>;
};

export default Comp_03_0138;
