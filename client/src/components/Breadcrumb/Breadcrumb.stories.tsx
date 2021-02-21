import React from 'react';
import BreadcrumbComponent from './index';

export default {
  component: BreadcrumbComponent,
  title: 'Components/Breadcrumb',
};

const props = {
  breadcrumbs: ['Eletronica, Audio y Video', 'iPod'],
};

export const Breadcrumb = () => <BreadcrumbComponent {...props} />;
