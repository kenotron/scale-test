// Comp_04_1201
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6005 from './Comp_05_6005';
import Comp_05_6006 from './Comp_05_6006';
import Comp_05_6007 from './Comp_05_6007';
import Comp_05_6008 from './Comp_05_6008';
import Comp_05_6009 from './Comp_05_6009';

const Comp_04_1201: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1201
      <div>
      <Comp_05_6005></Comp_05_6005>';
<Comp_05_6006></Comp_05_6006>';
<Comp_05_6007></Comp_05_6007>';
<Comp_05_6008></Comp_05_6008>';
<Comp_05_6009></Comp_05_6009>';
        </div>
      </div>;
};

export default Comp_04_1201;
