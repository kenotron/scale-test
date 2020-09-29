// Comp_05_4119
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_4119: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_4119
      <div>
      
        </div>
      </div>;
};

export default Comp_05_4119;
