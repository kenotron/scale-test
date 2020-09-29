// Comp_04_0801
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4005 from './Comp_05_4005';
import Comp_05_4006 from './Comp_05_4006';
import Comp_05_4007 from './Comp_05_4007';
import Comp_05_4008 from './Comp_05_4008';
import Comp_05_4009 from './Comp_05_4009';

const Comp_04_0801: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0801
      <div>
      <Comp_05_4005></Comp_05_4005>';
<Comp_05_4006></Comp_05_4006>';
<Comp_05_4007></Comp_05_4007>';
<Comp_05_4008></Comp_05_4008>';
<Comp_05_4009></Comp_05_4009>';
        </div>
      </div>;
};

export default Comp_04_0801;
