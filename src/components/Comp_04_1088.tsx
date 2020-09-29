// Comp_04_1088
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5440 from './Comp_05_5440';
import Comp_05_5441 from './Comp_05_5441';
import Comp_05_5442 from './Comp_05_5442';
import Comp_05_5443 from './Comp_05_5443';
import Comp_05_5444 from './Comp_05_5444';

const Comp_04_1088: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1088
      <div>
      <Comp_05_5440></Comp_05_5440>';
<Comp_05_5441></Comp_05_5441>';
<Comp_05_5442></Comp_05_5442>';
<Comp_05_5443></Comp_05_5443>';
<Comp_05_5444></Comp_05_5444>';
        </div>
      </div>;
};

export default Comp_04_1088;
