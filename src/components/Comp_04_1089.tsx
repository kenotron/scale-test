// Comp_04_1089
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5445 from './Comp_05_5445';
import Comp_05_5446 from './Comp_05_5446';
import Comp_05_5447 from './Comp_05_5447';
import Comp_05_5448 from './Comp_05_5448';
import Comp_05_5449 from './Comp_05_5449';

const Comp_04_1089: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1089
      <div>
      <Comp_05_5445></Comp_05_5445>';
<Comp_05_5446></Comp_05_5446>';
<Comp_05_5447></Comp_05_5447>';
<Comp_05_5448></Comp_05_5448>';
<Comp_05_5449></Comp_05_5449>';
        </div>
      </div>;
};

export default Comp_04_1089;
