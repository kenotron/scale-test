// Comp_04_0784
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3920 from './Comp_05_3920';
import Comp_05_3921 from './Comp_05_3921';
import Comp_05_3922 from './Comp_05_3922';
import Comp_05_3923 from './Comp_05_3923';
import Comp_05_3924 from './Comp_05_3924';

const Comp_04_0784: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0784
      <div>
      <Comp_05_3920></Comp_05_3920>';
<Comp_05_3921></Comp_05_3921>';
<Comp_05_3922></Comp_05_3922>';
<Comp_05_3923></Comp_05_3923>';
<Comp_05_3924></Comp_05_3924>';
        </div>
      </div>;
};

export default Comp_04_0784;
