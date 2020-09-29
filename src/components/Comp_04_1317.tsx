// Comp_04_1317
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6585 from './Comp_05_6585';
import Comp_05_6586 from './Comp_05_6586';
import Comp_05_6587 from './Comp_05_6587';
import Comp_05_6588 from './Comp_05_6588';
import Comp_05_6589 from './Comp_05_6589';

const Comp_04_1317: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1317
      <div>
      <Comp_05_6585></Comp_05_6585>';
<Comp_05_6586></Comp_05_6586>';
<Comp_05_6587></Comp_05_6587>';
<Comp_05_6588></Comp_05_6588>';
<Comp_05_6589></Comp_05_6589>';
        </div>
      </div>;
};

export default Comp_04_1317;
