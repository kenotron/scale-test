// Comp_04_1601
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8005 from './Comp_05_8005';
import Comp_05_8006 from './Comp_05_8006';
import Comp_05_8007 from './Comp_05_8007';
import Comp_05_8008 from './Comp_05_8008';
import Comp_05_8009 from './Comp_05_8009';

const Comp_04_1601: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1601
      <div>
      <Comp_05_8005></Comp_05_8005>';
<Comp_05_8006></Comp_05_8006>';
<Comp_05_8007></Comp_05_8007>';
<Comp_05_8008></Comp_05_8008>';
<Comp_05_8009></Comp_05_8009>';
        </div>
      </div>;
};

export default Comp_04_1601;
