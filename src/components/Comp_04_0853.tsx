// Comp_04_0853
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4265 from './Comp_05_4265';
import Comp_05_4266 from './Comp_05_4266';
import Comp_05_4267 from './Comp_05_4267';
import Comp_05_4268 from './Comp_05_4268';
import Comp_05_4269 from './Comp_05_4269';

const Comp_04_0853: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0853
      <div>
      <Comp_05_4265></Comp_05_4265>';
<Comp_05_4266></Comp_05_4266>';
<Comp_05_4267></Comp_05_4267>';
<Comp_05_4268></Comp_05_4268>';
<Comp_05_4269></Comp_05_4269>';
        </div>
      </div>;
};

export default Comp_04_0853;
