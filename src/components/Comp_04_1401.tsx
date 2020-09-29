// Comp_04_1401
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7005 from './Comp_05_7005';
import Comp_05_7006 from './Comp_05_7006';
import Comp_05_7007 from './Comp_05_7007';
import Comp_05_7008 from './Comp_05_7008';
import Comp_05_7009 from './Comp_05_7009';

const Comp_04_1401: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1401
      <div>
      <Comp_05_7005></Comp_05_7005>';
<Comp_05_7006></Comp_05_7006>';
<Comp_05_7007></Comp_05_7007>';
<Comp_05_7008></Comp_05_7008>';
<Comp_05_7009></Comp_05_7009>';
        </div>
      </div>;
};

export default Comp_04_1401;
