// Comp_04_1602
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8010 from './Comp_05_8010';
import Comp_05_8011 from './Comp_05_8011';
import Comp_05_8012 from './Comp_05_8012';
import Comp_05_8013 from './Comp_05_8013';
import Comp_05_8014 from './Comp_05_8014';

const Comp_04_1602: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1602
      <div>
      <Comp_05_8010></Comp_05_8010>';
<Comp_05_8011></Comp_05_8011>';
<Comp_05_8012></Comp_05_8012>';
<Comp_05_8013></Comp_05_8013>';
<Comp_05_8014></Comp_05_8014>';
        </div>
      </div>;
};

export default Comp_04_1602;
