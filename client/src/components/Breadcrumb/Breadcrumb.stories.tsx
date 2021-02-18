import React from 'react';
import BreadcrumbComponent from './index';

export default {
  component: BreadcrumbComponent,
  title: 'Components/Breadcrumb',
};

const props = {
  category: 'Eletronica, Audio y Video',
  product: 'iPod',
};

export const Breadcrumb = () => <BreadcrumbComponent {...props} />;
