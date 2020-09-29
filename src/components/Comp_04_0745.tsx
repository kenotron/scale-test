// Comp_04_0745
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3725 from './Comp_05_3725';
import Comp_05_3726 from './Comp_05_3726';
import Comp_05_3727 from './Comp_05_3727';
import Comp_05_3728 from './Comp_05_3728';
import Comp_05_3729 from './Comp_05_3729';

const Comp_04_0745: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0745
      <div>
      <Comp_05_3725></Comp_05_3725>';
<Comp_05_3726></Comp_05_3726>';
<Comp_05_3727></Comp_05_3727>';
<Comp_05_3728></Comp_05_3728>';
<Comp_05_3729></Comp_05_3729>';
        </div>
      </div>;
};

export default Comp_04_0745;
