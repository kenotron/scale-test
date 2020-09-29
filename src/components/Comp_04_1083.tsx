// Comp_04_1083
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5415 from './Comp_05_5415';
import Comp_05_5416 from './Comp_05_5416';
import Comp_05_5417 from './Comp_05_5417';
import Comp_05_5418 from './Comp_05_5418';
import Comp_05_5419 from './Comp_05_5419';

const Comp_04_1083: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1083
      <div>
      <Comp_05_5415></Comp_05_5415>';
<Comp_05_5416></Comp_05_5416>';
<Comp_05_5417></Comp_05_5417>';
<Comp_05_5418></Comp_05_5418>';
<Comp_05_5419></Comp_05_5419>';
        </div>
      </div>;
};

export default Comp_04_1083;
