import React from 'react'
import styled from 'styled-components';

import { BreadcrumbItem, IBreadcrumbItem } from './BreadcrumbItem';

export interface IBreadcrumb {
  items: IBreadcrumbItem[]
}

const BreadContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  box-shadow: -1px 0px 0px 0px ${props => props.theme.colors['grey-400']};
`;

const Breadcrumbs: React.FC<IBreadcrumb> = (props) => {
  return (
    <BreadContainer>
      {props.items.map((item, idx )=> {
        return <BreadcrumbItem {...item} key={idx} />
      })}
    </BreadContainer>
  )
}

export default Breadcrumbs
