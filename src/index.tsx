import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.less';

const root = createRoot(document.querySelector('#root') || document.body);

root.render(<div>hahah</div>);
